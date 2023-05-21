import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // TODO https://docs.nestjs.com/openapi/introduction
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .addBearerAuth() // TODO: Agregamos el bearer auth para que nos pida el token en la documentacion de swagger
  .setTitle('Mi API documentacion')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('items')
  .addTag('country')
  .build();

  app.useGlobalPipes(
    new ValidationPipe({
        whitelist: true, // TODO: Esto es para que solo se acepten los campos que estan en el DTO
        forbidNonWhitelisted: true, // TODO: Esto es para que si se envia un campo que no esta en el DTO, se rechace la peticion
        transform: true, // TODO: Esto es para que los parametros que vienen en la peticion se transformen al tipo de dato que se espera en el DTO
    })
  )




const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('documentacion', app, document);
    app.useGlobalPipes(new ValidationPipe());
    

    await app.listen(3000);
}
bootstrap();

// Los parametros que viejan en Res que viajan en http viene en string, por lo que hay que parsearlos a number
