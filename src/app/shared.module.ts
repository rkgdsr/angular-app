import {NgModule} from '@angular/core';
import {HeroOldDirective} from '@src/app/upgraded/hero-detail.directive';
import {CommonModule} from '@angular/common';
import {HeroItemOldDirective} from '@src/app/upgraded/hero-item.directive';


@NgModule({
  providers: [],
  declarations: [
    HeroOldDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeroOldDirective,
  ],
  entryComponents: [
    HeroOldDirective,
  ]
})
export class SharedModule {}
