import { Hero } from '@fullstack-monorepo/api-interfaces';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  getHeroes(): Observable<Hero[]> {
    return this.heroesService.findAll();
  }

  @Get('/data')
  createHeroData(): Observable<Hero[]> {
    return this.heroesService.createHeroData();
  }

  @Get(':id')
  getHero(@Param('id') id: number): Observable<Hero> {
    return this.heroesService.findOne(id);
  }

  @Put()
  updateHero(@Body() updateHeroDto: Hero): Observable<Hero> {
    console.log(updateHeroDto);
    return this.heroesService.updateHero(updateHeroDto);
  }

  @Post()
  addHero(@Body() addHeroDto: Hero): Observable<Hero> {
    return this.heroesService.create(addHeroDto);
  }

  @Delete('/data')
  deleteHeroes() {
    return this.heroesService.deleteAllHeroes();
  }

  @Delete(':id')
  deleteHero(@Param('id') id: number) {
    return this.heroesService.deleteHero(id);
  }
}
