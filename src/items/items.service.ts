import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items } from '@prisma/client'; // Asegúrate de importar el tipo Item correctamente

@Injectable()
export class ItemsService {

  constructor(private prisma: PrismaService) {}

  async create(createItemDto: CreateItemDto) {
    // TODO: DTO CreateItemDto --> Aqui viene todo enviado desde el body
    return this.prisma.items.create({ data: createItemDto });
    // return "Creando un item...";
  }

  async findAll(): Promise<Items[]> {
    return this.prisma.items.findMany({
        include: {user: true}
    });
  }

  // TODO: Aqui se define el tipo de retorno de la promesa (Items) y el tipo de dato que se recibe (number)  Promise<Items>

  async findOne(idItems: number): Promise<Items>  {
    return this.prisma.items.findUnique({ 
        include: {
            user: {
              select: {
                idUser: true,
                email: true,
                name: true,
              },
            },
          },
        where: { idItems } 
    })
  }

  async update(idItems: number, updateItemDto: UpdateItemDto) {
    return this.prisma.items.update({
        where: { idItems },
        data: updateItemDto,
    })
  }

  async remove(idItems: number) {
    return this.prisma.items.delete({
        where: {idItems}
    })
  }
}
