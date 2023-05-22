import { Controller, Get, Query } from '@nestjs/common';
import { MunicipioService, PlazoService } from './municipio.service';


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

@Controller('plazo')
export class PlazoController {
    constructor(private readonly PlazoService: PlazoService) {}

    @Get()
    async findAllPlazo(@Query('nombre') filter? : string){
        return this.PlazoService.findAllPlazo(filter);
    }
}


