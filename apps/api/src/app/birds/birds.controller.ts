import { Bird } from '@fullstack-monorepo/api-interfaces';
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
import { BirdsService } from './birds.service';

@Controller('birds')
export class BirdsController {
  constructor(private birdsService: BirdsService) {}

  @Get()
  getBirds(): Observable<Bird[]> {
    return this.birdsService.findAll();
  }

  @Get('/data')
  createBirdData(): Observable<Bird[]> {
    return this.birdsService.createBirdData();
  }

  @Get(':id')
  getBird(@Param('id') id: string): Observable<Bird> {
    return this.birdsService.findOne(id);
  }

  @Put()
  updateBird(@Body() updateBirdDto: Bird): Observable<Bird> {
    return this.birdsService.updateBird(updateBirdDto);
  }

  @Post()
  addBird(@Body() addBirdDto: Bird): Observable<Bird> {
    return this.birdsService.create(addBirdDto);
  }

  @Delete('/data')
  deleteBirds() {
    return this.birdsService.deleteAllBirds();
  }

  @Delete(':id')
  deleteBird(@Param('id') id: number) {
    return this.birdsService.deleteBird(id);
  }
}
