// src/auth/dto/signup.dto.ts
import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
  IsOptional,
   IsEnum
} from 'class-validator';
import { UserRole } from '../../users/entities/user.entity';

export class SignupDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(5)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  password: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
