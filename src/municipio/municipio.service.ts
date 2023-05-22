import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { PrismaService } from 'src/items/prisma.service';

@Injectable()
export class MunicipioService {
  constructor(private prisma: PrismaService) {}
  async findAllMunicipio(filter? : string, idDepartamento? : number) {
    let whereCondition: any = {};
    if(filter || idDepartamento){
        whereCondition.descripcion = { contains: filter ?? '' }
        whereCondition.idDepartamento = { equals: idDepartamento ?? '' }
    }
    const municipioSearch = await this.prisma.municipio_mh.findMany({
        where: whereCondition,
        include: {
            departamento: true
        }
    });
    return municipioSearch;
  }
}

@Injectable()
export class PlazoService {

    constructor(private prisma: PrismaService) {}
    
    async findAllPlazo(filter? : string) {
        let whereCondition: any = {};

        if(filter){
            whereCondition.nombre = { contains: filter ?? '' }
        }
        
        const plazoSearch = await this.prisma.plazo.findMany({
           where: whereCondition
        });
        return plazoSearch;
    }
}

