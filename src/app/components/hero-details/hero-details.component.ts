import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Hero} from '../../hero';
import {HeroesService} from '../../heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private heroesService: HeroesService
  ) { }

  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroesService.getHero(id).subscribe(hero => this.hero = hero);
  }

}
