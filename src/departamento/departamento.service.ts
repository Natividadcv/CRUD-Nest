import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/items/prisma.service';
import { log } from 'console';

@Injectable()
export class DepartamentoService {

    constructor(private prisma: PrismaService) {}

  async findAllDepartamento(filter?: string, idPais?: number) {
    try {
        
        let whereCondition : any = {}; // Se crea un objeto vacío para almacenar las condiciones de búsqueda de los departamentos en la base de datos y el idPais es opcional por lo que se inicializa en 0 para que no se aplique la condición en caso de que no se proporcione el idPais en la petición GET se usa any porque no se conoce el tipo de dato que se va a almacenar en el objeto whereCondition

        // const whereCondition: WhereConditionType = {}; // Es un DTO que sirve para definir el tipo de dato que se va a almacenar en el objeto whereCondition


        if(filter || idPais){
            whereCondition.nombre = { contains: filter ?? '' }
            whereCondition.idPais = { equals: idPais ?? 0 }
        }

        log('Dinamico: ', JSON.stringify(whereCondition))
        
        // if(filter){
        //     whereCondition.nombre = {
        //         contains: filter || ''
        //     }
        // }

        // log('1 ', {whereCondition});
        
        // if (idPais){
        //     whereCondition.idPais = idPais;
        // }

        // log('2 ',{whereCondition});

        const departamentoSearch = await this.prisma.departamento_mh.findMany({
            where : whereCondition,
            include : {
                pais : true
            }
        })
        
        // const departamentoSearch = await this.prisma.departamento_mh.findMany({

        //     where : {
        //         nombre : {
        //             contains: filter || ''
        //         },
        //         idPais : {
        //             equals: idPais || 0 // Si no se proporciona el filtro 
        //         }
                
        //     }
        // })

        return departamentoSearch;

    } catch (error) {
        
    }
  }

}
