import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor() { }

  @Input() heroes: Hero[];

  ngOnInit(): void {
  }

}
