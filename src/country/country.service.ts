import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/items/prisma.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { pais_mh } from '@prisma/client';
import { filtroBusquedaPaisesDto } from './dto'
import { log } from 'console';

@Injectable()
export class CountryService {

    constructor(private prisma: PrismaService) {}


  async getCountries(filter?:filtroBusquedaPaisesDto): Promise<pais_mh[]> {
    try {
        const countries = await this.prisma.pais_mh.findMany({
            where : {
                nombre : {
                    contains: filter?.nombre || '' // Si no se proporciona el filtro de nombre, se devuelve todos los países
                }
            }
        })

        // if(!countries){
        //     throw new Error('No se encontraron países')
        // }

        if(!countries){
            throw new HttpException(`No encontramos el pais  ${filter?.nombre}`, HttpStatus.NOT_FOUND);
          }

        return countries;
        
    } catch (error) {
        log(error);
        throw new HttpException('Error al obtener los países', HttpStatus.INTERNAL_SERVER_ERROR);

    }
  }

}
