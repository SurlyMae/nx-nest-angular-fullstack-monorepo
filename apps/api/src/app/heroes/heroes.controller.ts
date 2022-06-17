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
import { Observable, of } from 'rxjs';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  getHeroes(): Observable<Hero[]> {
    console.log(`inside getHeroes controller`);
    return this.heroesService.findAll();
  }

  @Get('/:id')
  getHero(@Param('id') id: number): Observable<Hero> {
    return this.heroesService.findOne(id);
  }

  @Put()
  updateHero(@Body() updateHeroDto: Hero): Observable<any> {
    console.log(updateHeroDto);
    return of({});
  }

  @Post()
  addHero(@Body() addHeroDto: Hero): Observable<any> {
    console.log(addHeroDto);
    return of({});
  }

  @Delete(':id')
  deleteHero(@Param('id') id: number) {
    return `this action deletes hero ${id}`;
  }
}
