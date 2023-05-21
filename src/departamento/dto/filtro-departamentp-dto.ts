import { IsNumber, IsOptional, IsString } from "class-validator";

export class filtroBusquedaDepartamentoDto {
    @IsString()
    @IsOptional()
    filter: string;

    @IsNumber()
    idPais: number ;
}
