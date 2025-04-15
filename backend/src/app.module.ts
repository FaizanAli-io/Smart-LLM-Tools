// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { EmailsModule } from './emails/emails.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // allows use of process.env anywhere
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: false, // should be false in production
      ssl: { rejectUnauthorized: false }, // for Neon PostgreSQL
    }),
    AuthModule,
    EmailsModule,
  ],
})
export class AppModule {}
