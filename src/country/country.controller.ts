import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiTags } from '@nestjs/swagger';
import { filtroBusquedaPaisesDto } from './dto'
import { pais_mh } from '@prisma/client';



ApiTags('country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getCountries(@Query() filter?:filtroBusquedaPaisesDto): Promise<pais_mh[]> {
    return this.countryService.getCountries(filter);
  }
 
}
