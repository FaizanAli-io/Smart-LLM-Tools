import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { EmailsModule } from 'src/emails/emails.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // if not already added
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
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
