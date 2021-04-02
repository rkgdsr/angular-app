import {Directive, ElementRef, forwardRef, Injector, Input} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import {Hero} from '../hero';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
  selector: 'lw-hero-old',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HeroOldDirective),
    multi: true,
  }]
})
export class HeroOldDirective extends UpgradeComponent {
  @Input() text: string;
  @Input() hero: Hero;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('heroOld', elementRef, injector);
  }
}
