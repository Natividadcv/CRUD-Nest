import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';
import { PrismaService } from 'src/items/prisma.service';

@Module({
  controllers: [DepartamentoController],
  providers: [DepartamentoService, PrismaService]
})
export class DepartamentoModule {}
