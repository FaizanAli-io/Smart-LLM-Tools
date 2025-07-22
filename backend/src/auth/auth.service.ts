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
import * as jwt from 'jsonwebtoken';

import { User, UserRole } from '../users/user.entity';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
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
    const existing = await this.userRepo.findOne({ where: { email: dto.email } });
    if (existing) {
      throw new BadRequestException('This email address is already registered. Please use a different email or try logging in.');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = this.userRepo.create({
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      role: dto.role ?? UserRole.FREE,
      isVerified: true, // Temporarily skipping verification logic
    });

    await this.userRepo.save(user);

    // TODO: Re-enable email verification if needed
    // const token = this.generateEmailVerificationToken(user.id);
    // await this.emailsService.sendVerificationEmail(user.email, token);

    return { 
      message: `Welcome ${dto.name}! Your account has been created successfully. You can now log in with your credentials.` 
    };
  }

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);

    if (!user) {
      throw new UnauthorizedException('The email or password you entered is incorrect. Please check your credentials and try again.');
    }

    if (!user.isVerified) {
      throw new ForbiddenException('Your email address needs to be verified before you can log in. Please check your email for the verification link.');
    }

    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const token = this.jwtService.sign(payload);

    return {
      message: `Welcome back, ${user.name}! You have been logged in successfully.`,
      user,
      token,
    };
  }

  private async validateUser(dto: LoginDto): Promise<User | null> {
    const { email, password } = dto;
    const user = await this.userRepo.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }

    return null;
  }

  async verifyEmail(token: string): Promise<string> {
    try {
      const decoded = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET_KEY as string,
      ) as { userId: number };

      const user = await this.userRepo.findOneBy({ id: decoded.userId });

      if (!user) {
        throw new UnauthorizedException('The verification link is invalid or has expired. Please request a new verification email.');
      }

      user.isVerified = true;
      user.emailVerificationToken = '';
      await this.userRepo.save(user);

      return 'Congratulations! Your email has been verified successfully. You can now log in to your account.';
    } catch (err) {
      throw new UnauthorizedException('Email verification failed. The link may be invalid or expired. Please try requesting a new verification email.');
    }
  }

  private generateResetPasswordToken(userId: number): string {
    return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET_KEY as string, {
      expiresIn: '1h',
    });
  }

  async forgotPassword(email: string): Promise<{ message: string }> {
    const user = await this.userRepo.findOneBy({ email });

    if (!user) {
      throw new UnauthorizedException('No account found with this email address. Please check the email and try again, or create a new account.');
    }

    const resetToken = this.generateResetPasswordToken(user.id);
    user.passwordResetToken = resetToken;
    await this.userRepo.save(user);

    await this.emailsService.sendResetPasswordEmail(email, resetToken);

    return { 
      message: 'Password reset instructions have been sent to your email address. Please check your inbox and follow the instructions to reset your password.' 
    };
  }

  async resetPassword(token: string, newPassword: string): Promise<{ message: string }> {
    try {
      const decoded = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET_KEY as string,
      ) as { userId: number };

      const user = await this.userRepo.findOneBy({ id: decoded.userId });

      if (!user || user.passwordResetToken !== token) {
        throw new UnauthorizedException('The password reset link is invalid or has expired. Please request a new password reset email.');
      }

      user.password = await bcrypt.hash(newPassword, 10);
      user.passwordResetToken = '';
      await this.userRepo.save(user);

      return { 
        message: 'Your password has been reset successfully! You can now log in with your new password.' 
      };
    } catch (error) {
      throw new UnauthorizedException('Password reset failed. The reset link may be invalid or expired. Please try requesting a new password reset email.');
    }
  }

  async updateUserRole(userId: number, role: UserRole): Promise<User> {
    const user = await this.userRepo.findOneBy({ id: userId });

    if (!user) {
      throw new BadRequestException('User not found. Please check the user ID and try again.');
    }

    user.role = role;
    return await this.userRepo.save(user);
  }
}