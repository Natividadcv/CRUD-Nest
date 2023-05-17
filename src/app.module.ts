import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { PrismaService } from './items/prisma.service';

@Module({
  imports: [
    ItemsModule
],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
