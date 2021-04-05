import {Directive, ElementRef, forwardRef, Injector, Input} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { Hero } from '@src/app/types/hero';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
  selector: 'hero-full-info',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HeroFullInfoDirective),
    multi: true,
  }]
})
export class HeroFullInfoDirective extends UpgradeComponent {
  @Input() text: string;
  @Input() hero: Hero;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('heroFullInfo', elementRef, injector);
  }
}
