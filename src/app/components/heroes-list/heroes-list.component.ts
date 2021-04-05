import { Component, OnInit } from '@angular/core';
import { Hero } from '@src/app/types/hero';
import {HeroesService} from '@src/app/services/heroes.service';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {MainFilterWorkerService} from '@src/app/workers/main-filter-worker.service';
import {MessageService} from '@src/app/messages/message.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.less']
})
export class HeroesListComponent implements OnInit {

  constructor(
    private heroesService: HeroesService,
    private mainFilterWorkerService: MainFilterWorkerService
  ) { }

  heroes: Hero[] = [];
  heroesByFilter: Hero[] = [];
  selected?: Hero;
  term = new Subject<string>();
  isFilter = false;


  ngOnInit(): void {
    this.loadHeroes();
  }

  onSelect(hero: Hero): void {
    this.selected = hero;
  }

  loadHeroes(): void {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  renderHeroes(): Hero[] {
    return this.isFilter ? this.heroesByFilter : this.heroes;
  }

  getHeroes(): void {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.heroesService.listByFilter.subscribe(heroes => this.heroesByFilter = heroes);
  }

  add(name: string, value: number): void {
    this.heroesService.addHero({ name, value } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroesService.deleteHero(hero.id).subscribe();
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


  filter(value: string): void {
    if (!value) { return; }

    this.isFilter = true;
    this.mainFilterWorkerService.getByFilter({
      list: this.heroes,
      param: +value
    }).then((data) => {
      this.heroesByFilter = data;
      console.log(data);
    });
  }

  resetFilter(): void {
    this.isFilter = false;
  }
}
