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

    log('Hey Por aca: ', JSON.stringify(whereCondition))

    const municipioSearch = await this.prisma.municipio_mh.findMany({
        where: whereCondition,
        include: {
            departamento: true
        }
    });
    return municipioSearch;
  }

 
}
