import { Component, OnInit } from '@angular/core';
import {Hero} from '../../hero';
import {HEROES} from '../../heroes-list';
import {HeroesService} from '../../heroes.service';

@Component({
  selector: 'app-heroes-top',
  templateUrl: './heroes-top.component.html',
  styleUrls: ['./heroes-top.component.css']
})
export class HeroesTopComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  heroes: Hero[] = HEROES;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes().subscribe(
      heroes => this.heroes = heroes.sort(
        (a, b) => (a.value <= b.value ? 1 : -1)
      ).slice(0, 4)
    );
  }
}
