import { IsOptional, IsString } from "class-validator";

export class filtroBusquedaPaisesDto {  
    @IsString()  
    @IsOptional()
    nombre: string;
        // Otros campos del modelo
}
