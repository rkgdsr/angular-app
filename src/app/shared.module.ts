import {NgModule} from '@angular/core';
import {HeroFullInfoDirective} from '@src/app/upgraded/hero-full-info.directive';
import {CommonModule} from '@angular/common';
import {HeroCardDirective} from '@src/app/upgraded/hero-card.directive';


@NgModule({
  providers: [],
  declarations: [
    HeroFullInfoDirective,
    HeroCardDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeroFullInfoDirective,
    HeroCardDirective
  ],
  entryComponents: [
    HeroFullInfoDirective,
    HeroCardDirective
  ]
})
export class SharedModule {}
