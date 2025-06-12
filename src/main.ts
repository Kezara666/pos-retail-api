import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('POS Retail API')
    .setDescription('API documentation for the POS Retail system')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

   // Allow all origins (for development only; restrict in production!)
  app.enableCors({
    origin: true, // This allows all origins
    credentials: true, // If you need cookies/auth headers
  });

  await app.listen(4000);
}
bootstrap();