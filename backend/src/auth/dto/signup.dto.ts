// src/auth/dto/signup.dto.ts
import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(5)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  password: string;
}
