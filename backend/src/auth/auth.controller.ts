import { Controller, Post, Body, Get, UseGuards, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GetUser } from './decorators/get-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { SignupDto } from './dto/signup.dto';

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

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@GetUser() user: User) {
    return user; // this will return the user info if JWT is valid
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
}
