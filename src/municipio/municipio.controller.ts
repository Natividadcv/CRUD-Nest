import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MunicipioService } from './municipio.service';


@Controller('municipio')
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) {}

  @Get()
  async findAllMunicipio(
    @Query('descripcion') filter?: string,
    @Query('idDepartamento') idDepartamento?: number,
  ) {
    return this.municipioService.findAllMunicipio(filter, idDepartamento);
  }

}
