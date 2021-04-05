import {Directive, ElementRef, EventEmitter, Injector, Input, Output} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { Hero } from '@src/app/types/hero';

@Directive({
  selector: 'hero-card',
})
export class HeroCardDirective extends UpgradeComponent {
  @Input() hero: Hero;
  @Output() delete = new EventEmitter<Hero>();

  constructor(elementRef: ElementRef, injector: Injector) {
    super('heroCard', elementRef, injector);
  }
}
