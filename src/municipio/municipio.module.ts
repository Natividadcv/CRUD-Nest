import { Module } from '@nestjs/common';
import { MunicipioService,PlazoService  } from './municipio.service';
import { MunicipioController,PlazoController } from './municipio.controller';
import { PrismaService } from 'src/items/prisma.service';

@Module({
  controllers: [MunicipioController,PlazoController],
  providers: [MunicipioService, PlazoService, PrismaService]
})
export class MunicipioModule {}
