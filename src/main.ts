import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // TODO https://docs.nestjs.com/openapi/introduction
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Mi API documentacion')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('items')
  .build();
const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('documentacion', app, document);
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3000);
}
bootstrap();
