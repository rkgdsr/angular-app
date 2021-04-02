import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import {Hero} from '../hero';

@Directive({
  selector: 'hero-old',
})
export class HeroOldDirective extends UpgradeComponent {
  @Input() text: string;
  @Input() hero: Hero;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('heroOld', elementRef, injector);
  }
}
