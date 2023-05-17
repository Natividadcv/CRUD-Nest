import { IsNotEmpty,Length,IsNumber } from "class-validator";

export class CreateItemDto {
    @IsNotEmpty() // TODO: Esto es para que no se pueda enviar un campo vacio
    @Length(3, 20) // TODO: Esto es para que el campo tenga un minimo de 3 caracteres y un maximo de 20
    name: string;

    @IsNotEmpty()
    @Length(3, 500)
    description: string;
    
    @IsNumber()
    userId: number;
}
