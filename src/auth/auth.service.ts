import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { PrismaService } from './prisma.service';
import { hash, compare } from 'bcrypt';
import { User } from '@prisma/client'; // Asegúrate de importar el tipo Item correctamente
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { log } from 'console';


@Injectable()
export class AuthService {
    
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
        ) {}
    
  async register(userObjet: RegisterAuthDto) {
  
    try {
        const {password} = userObjet // TODO password en texto plano
        const plainToHash = await hash(password,10) // TODO password encriptado
        userObjet = {...userObjet, password: plainToHash} // TODO sobreescribiendo el password en texto plano por el password encriptado


        return this.prisma.user.create({ data : userObjet})
    } catch (error) {
        console.log(error)
    }


  }

   async login(userObjetLogin: LoginAuthDto) {
    const { email, password } = userObjetLogin
      const findUser = await this.prisma.user.findUnique({ where : {email} });
        if(!findUser) throw new HttpException('Usuario no encontrado', 404);
        const checkPassword = await compare(password, findUser.password);

        log({findUser})

        if(!checkPassword) throw new HttpException('Contraseña incorrecta', 400);


        const payload = {id:findUser.idUser, name:findUser.name} // TODO payload para firmar el token con el id y el nombre del usuario 
        const token =  this.jwtService.sign(payload); // TODO firmar el token con el payload

        const data = {
            user: findUser,
            token
        }; 

        return data;
    }
  
}

