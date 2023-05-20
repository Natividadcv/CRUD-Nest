import { IsNotEmpty,Length,IsNumber, IsDate } from "class-validator";


export class CreateProductDto {
    @IsNotEmpty()
    @Length(3, 10)
    name: string;

    @IsNotEmpty()
    @Length(3, 500)
    descripcion: string;

    @IsNotEmpty()
    @IsNumber()
    precio: number;

    
}
