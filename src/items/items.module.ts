import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    // TODO: Aqui se importa el modulo de items para que pueda ser usado en el app.module.ts
  ],
  controllers: [ItemsController],
  providers: [ItemsService, PrismaService]
})
export class ItemsModule {}
