import {Directive, ElementRef, EventEmitter, Injector, Input, Output} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import {Hero} from '../hero';

@Directive({
  selector: 'hero-item-old',
})
export class HeroItemOldDirective extends UpgradeComponent {
  @Input() hero: Hero;
  @Output() delete = new EventEmitter<Hero>();

  constructor(elementRef: ElementRef, injector: Injector) {
    super('heroItemOld', elementRef, injector);
  }
}
