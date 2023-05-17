import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // TODO RegisterAuthDto
  @Post('register')
  registerUser(@Body() userObjet: RegisterAuthDto) {
    // console.log({body : userObjet});
    return this.authService.register(userObjet);
    
  }

  // TODO RegisterAuthDto
  @Post('login')
  loginUser(@Body() userObjetLogin: LoginAuthDto) {
    return this.authService.login(userObjetLogin);
  }


  



}
