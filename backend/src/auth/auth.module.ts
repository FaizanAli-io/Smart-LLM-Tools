// src/auth/auth.module.ts
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AdminController } from './admin.controller'; // ✅ NEW
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { EmailsModule } from 'src/emails/emails.module';
import { RolesGuard } from './guards/roles.guard'; // ✅ NEW

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature([User]),
    EmailsModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.getOrThrow<string>('ACCESS_TOKEN_SECRET_KEY'),
        signOptions: {
          expiresIn: parseInt(
            config.get<string>('ACCESS_TOKEN_EXPIRE_TIME') || '3600',
          ),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController, AdminController], // ✅ Added AdminController
  providers: [AuthService, JwtStrategy, RolesGuard], // ✅ Register RolesGuard
})
export class AuthModule {}
