import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './heroes-list';
import {Observable, of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(item => item.id === id);
    return of(hero);
  }
}
