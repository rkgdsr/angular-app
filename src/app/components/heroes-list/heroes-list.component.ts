import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import {HeroesService} from '../../heroes.service';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.less']
})
export class HeroesListComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  heroes: Hero[] = [];
  selected?: Hero;
  term = new Subject<string>();

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selected = hero;
  }

  getHeroes(): void {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, value: number): void {
    this.heroesService.addHero({ name, value } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero, e: Event): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroesService.deleteHero(hero.id).subscribe();

    e.preventDefault();
  }

  search(request: string): void {
    if (!request) {
      this.getHeroes();
      return;
    }

    this.term.next(request);

    this.term.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroesService.searchHeroes(term))
    ).subscribe(heroes => this.heroes = heroes);
  }
}
