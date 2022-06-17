import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './heroes/heroes.controller';
import { HeroesService } from './heroes/heroes.service';

@Module({
  imports: [],
  controllers: [AppController, HeroesController],
  providers: [AppService, HeroesService],
})
export class AppModule {}
