import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
// TODO ACA VERIFICO EL TOKEN QUE ME MANDA EL FRONTEND Y LO VALIDO CON EL SECRET QUE TENGO EN EL ENV DE NESTJS Y DEVUELVO EL PAYLOAD QUE YO QUIERO 
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: process.env.JWT_SECRET, 
        });
      }
    
      async validate(payload: any) { // TODO nosotros definimos el payload el id y el name
        return { userId: payload.id, name: payload.name };
      }
}