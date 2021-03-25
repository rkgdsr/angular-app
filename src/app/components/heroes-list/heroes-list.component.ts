import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HEROES } from '../../heroes-list';
import {HeroesService} from '../../heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.less']
})
export class HeroesListComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  heroes: Hero[] = HEROES;

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
