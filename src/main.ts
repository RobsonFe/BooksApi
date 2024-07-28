import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);

  app.setGlobalPrefix('api/v1', {
    exclude: ['/'],
  });
}

bootstrap();
