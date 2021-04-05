import {AfterViewInit, Component, forwardRef, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Hero} from '@src/app/types/hero';
import {HeroesService} from '@src/app/services/heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  providers: [
    HeroesService
  ]
})
export class HeroDetailsComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute,
    @Inject(forwardRef(() => Location)) public location: Location,
    @Inject(forwardRef(() => HeroesService)) private heroesService: HeroesService,
  ) {


  }

  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  ngAfterViewInit(): void {
  }


  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroesService.getHero(id).subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroesService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
