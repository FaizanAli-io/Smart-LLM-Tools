// src/auth/dto/login.dto.ts
import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @MinLength(5)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  password: string;
}
