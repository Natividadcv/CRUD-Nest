import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { PrismaService } from './items/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    ItemsModule,
    AuthModule,
    ProductsModule,
    CountryModule
],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
