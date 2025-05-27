import {
  Get,
  Post,
  Patch,
  Body,
  Query,
  UseGuards,
  Controller,
} from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

import { User } from 'src/users/entities/user.entity';
import { GetUser } from './decorators/get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    return await this.authService.signup(signupDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @Get('all')
  async listUsers(): Promise<User[]> {
    return this.authService.listUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@GetUser() user: User) {
    return user;
  }

  @Get('verify-email')
  async verifyEmail(@Query('token') token: string): Promise<string> {
    return this.authService.verifyEmail(token);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() { email }: { email: string }): Promise<string> {
    await this.authService.forgotPassword(email);
    return 'Password reset link has been sent to your email.';
  }

  @Post('reset-password')
  async resetPassword(
    @Body() { token, newPassword }: { token: string; newPassword: string },
  ): Promise<string> {
    await this.authService.resetPassword(token, newPassword);
    return 'Password reset successfully!';
  }

  @Patch('update-role')
  async updateUserRole(@Body() dto: UpdateRoleDto) {
    return this.authService.updateUserRole(dto.userId, dto.role);
  }
}
