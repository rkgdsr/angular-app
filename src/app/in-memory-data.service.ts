import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(): any {
    const heroes = [
      { id: 11, name: 'Dr Nice', value: 5 },
      { id: 12, name: 'Narco', value: 5 },
      { id: 13, name: 'Bombasto', value: 5 },
      { id: 14, name: 'Celeritas', value: 5 },
      { id: 15, name: 'Magneta', value: 5 },
      { id: 16, name: 'RubberMan', value: 5 },
      { id: 17, name: 'Dynama', value: 10 },
      { id: 18, name: 'Dr IQ', value: 5 },
      { id: 19, name: 'Magma', value: 5 },
      { id: 20, name: 'Tornado', value: 10 }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ?
      Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
