import {AfterViewInit, Component, forwardRef, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Hero} from '../../hero';
import {HeroesService} from '../../heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent implements OnInit, AfterViewInit {

  show: boolean;

  constructor(
    @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute,
    @Inject(forwardRef(() => Location)) public location: Location,
    @Inject(forwardRef(() => HeroesService)) private heroesService: HeroesService,
  ) {


  }

  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
    this.show = true;
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
