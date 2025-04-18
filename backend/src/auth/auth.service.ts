import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User } from 'src/users/entities/user.entity';
import { UserRole } from 'src/users/entities/user.entity';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as jwt from 'jsonwebtoken';
import { EmailsService } from 'src/emails/emails.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
    private readonly emailsService: EmailsService,
  ) {}

  async listUsers(): Promise<User[]> {
    return this.userRepo.find();
  }

  async signup(dto: SignupDto) {
    const existing = await this.userRepo.findOne({
      where: { email: dto.email },
    });
    if (existing) throw new BadRequestException('Email already in use');

    const hashed = await bcrypt.hash(dto.password, 10);

    const user = this.userRepo.create({
      name: dto.name,
      email: dto.email,
      password: hashed,
      role: dto.role ?? UserRole.FREE,
    });

    await this.userRepo.save(user);

    // Generate email verification token
    const verificationToken = this.generateEmailVerificationToken(user.id);
    user.emailVerificationToken = verificationToken;
    await this.userRepo.save(user);

    // Send the verification email
    await this.emailsService.sendVerificationEmail(
      user.email,
      verificationToken,
    );

    return { message: 'Signup successful' };
  }

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isVerified) {
      throw new ForbiddenException(
        'Please verify your email before logging in.',
      );
    }

    const payload: JwtPayload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload);
    return { token: accessToken }; // ✅ consistent with frontend
  }

  private async validateUser(dto: LoginDto): Promise<User | null> {
    const { email, password } = dto;
    const user = await this.userRepo.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  private generateEmailVerificationToken(userId: number): string {
    return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET_KEY as string, {
      expiresIn: 86400,
    });
  }

  async verifyEmail(token: string): Promise<string> {
    try {
      const decoded = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET_KEY as string,
      ) as { userId: number };

      const user = await this.userRepo.findOneBy({ id: decoded.userId });

      if (!user) {
        throw new UnauthorizedException('Invalid token');
      }

      user.isVerified = true;
      user.emailVerificationToken = '';
      await this.userRepo.save(user);

      return 'Email verified successfully!';
    } catch (err) {
      throw new UnauthorizedException('Failed to verify email');
    }
  }

  private generateResetPasswordToken(userId: number): string {
    return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET_KEY as string, {
      expiresIn: 3600,
    });
  }

  async forgotPassword(email: string): Promise<void> {
    const user = await this.userRepo.findOneBy({ email });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const resetToken = this.generateResetPasswordToken(user.id);
    user.passwordResetToken = resetToken;
    await this.userRepo.save(user);

    // Send the reset password email
    await this.emailsService.sendResetPasswordEmail(email, resetToken);
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    try {
      const decoded = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET_KEY as string,
      ) as { userId: number };

      const user = await this.userRepo.findOneBy({ id: decoded.userId });

      if (!user || user.passwordResetToken !== token) {
        throw new UnauthorizedException('Invalid or expired token');
      }

      user.password = await bcrypt.hash(newPassword, 10);
      user.passwordResetToken = ''; // Clear the token after successful reset
      await this.userRepo.save(user);
    } catch (error) {
      throw new UnauthorizedException('Failed to reset password');
    }
  }
}
