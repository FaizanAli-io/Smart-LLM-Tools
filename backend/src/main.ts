// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  dotenv.config(); // Load .env file
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS here
  app.enableCors({
  origin: [
    "http://localhost:5173", // for local dev
    "https://ai-biz-services.bizg.co.uk", // for deployed frontend
  ],
    credentials: true, // if you use cookies (optional)
  });

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
