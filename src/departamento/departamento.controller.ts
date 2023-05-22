import { Controller, Get, Query } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';


@Controller('departamento')
export class DepartamentoController {

  constructor(private readonly departamentoService: DepartamentoService) {}

  @Get()
  async findAllDepartamento(
    @Query('nombre') filter?: string,
    @Query('idPais') idPais?: number,
  ) {
    return this.departamentoService.findAllDepartamento(filter, idPais);
  }

  

  
}
