import { Hero } from '@fullstack-monorepo/api-interfaces';
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class HeroesService {
  private heroes: Hero[] = [
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

  create(hero: Hero) {
    this.heroes.push(hero);
  }

  findAll(): Observable<Hero[]> {
    return of(this.heroes);
  }

  findOne(id: number): Observable<Hero> {
    return of(this.heroes.find((hero) => hero.id == id));
  }
}
