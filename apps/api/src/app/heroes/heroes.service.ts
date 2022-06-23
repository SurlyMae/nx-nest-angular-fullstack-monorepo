import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Observable, from } from 'rxjs';
import { Hero, HeroDocument } from './schemas/hero.schema';
import { Model } from 'mongoose';
import { Hero as HeroDto } from '@fullstack-monorepo/api-interfaces';

@Injectable()
export class HeroesService {
  constructor(@InjectModel(Hero.name) private heroModel: Model<HeroDocument>) {}

  create(createHeroDto: HeroDto): Observable<Hero> {
    const createdHero = new this.heroModel(createHeroDto);
    return from(createdHero.save());
  }

  updateHero(updateHeroDto: HeroDto): Observable<Hero> {
    return from(
      this.heroModel.findOneAndReplace({ id: updateHeroDto.id }, updateHeroDto)
    );
  }

  findAll(): Observable<Hero[]> {
    return from(this.heroModel.find().exec());
  }

  findOne(id: number): Observable<Hero> {
    return from(this.heroModel.findOne({ id }));
  }

  deleteHero(id: number) {
    return from(this.heroModel.deleteOne({ id }));
  }

  createHeroData(): Observable<Hero[]> {
    const heroes: Hero[] = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];
    return from(this.heroModel.create(...heroes));
  }

  deleteAllHeroes() {
    return from(this.heroModel.deleteMany({}));
  }
}
