import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('items')
@UseGuards(JwtAuthGuard) // TODO: Esto es para que se use el guard en todos los metodos
@Controller('items') // TODO http://localhost:3000/items
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post() // TODO: Entra en el post de http://localhost:3000/items
  create(@Body() createItemDto: CreateItemDto) {
    // TODO: Aqui viene todo enviado desde el body
    return this.itemsService.create(createItemDto);
  }

//   @UseGuards(JwtAuthGuard) 
  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}
