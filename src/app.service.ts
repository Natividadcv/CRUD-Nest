import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!!';
  }

  // Aca van los modelos de la base de datos y las consultas a la base de datos
  getUsers(): string [] {
    return ['John', 'Doe'];
  }

}
