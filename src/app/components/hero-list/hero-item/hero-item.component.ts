import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../../hero';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  constructor() { }

  private heroItem: Hero;

  @Input()
  get hero(): Hero {
    return this.heroItem;
  }
  set hero(hero: Hero) {
    this.heroItem = {
      ...hero,
      name: (hero.name && hero.name.trim()) || 'NO NAME'
    } ;
  }

  ngOnInit(): void {
  }

}
