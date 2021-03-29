import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './heroes-list';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './messages/message.service';

import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      this.log(`${ operation } failed: ${ error.message }`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    this.messageService.add(`HeroesService: ${ message }`);
  }

  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES);
    // this.messageService.add('HeroService: fetched');
    // return heroes;

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(item => item.id === id);
    return of(hero);
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl + `/${hero.id}`, hero, this.httpOptions).
      pipe(
        tap(_ => this.log(`upload hero`)),
        catchError(this.handleError<any>('update'))
      );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`add hero with id:${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  deleteHero(id): Observable<Hero> {
    return this.http.delete<Hero>(this.heroesUrl + `/${id}`, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id: ${ id }`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      )
    );
  }
}
