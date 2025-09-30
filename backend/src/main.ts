import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Allow frontend to connect
  app.enableCors();
  
  await app.listen(3001);
  console.log('Server running on http://localhost:3001');
}

bootstrap();
