import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { Hero } from '@src/app/types/hero';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.less'],

  animations: [
    trigger('newItem', [
      // ...
      state('new', style({
        transform: 'translateX(100px)',
        opacity: 0.5,
      })),
      state('old', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('new <=> old', [
        animate('1s ease-in-out')
      ]),
    ]),
  ],
})
export class HeroItemComponent implements OnInit {

  @Input() hero?: Hero;
  @Output() delete = new EventEmitter<Hero>();

  isNew = true;

  constructor() { }

  toggleIsNew(): void {
    this.isNew = !this.isNew;
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.toggleIsNew();
    }, 0);
  }

  onDelete(): void {
    this.toggleIsNew();
    setTimeout(() => {
      this.delete.emit();
    }, 1000);
  }

}
