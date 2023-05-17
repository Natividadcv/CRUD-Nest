import { PartialType } from "@nestjs/swagger"; 
import { IsNotEmpty,IsEmail,MinLength,MaxLength } from "class-validator";
import { LoginAuthDto } from "./login-auth.dto";

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @MinLength(4)
  @MaxLength(20)
  password: string;
}
