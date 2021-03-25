import { Injectable, Type } from '@angular/core';
import {DynamicCardOneComponent} from './dynamic-components/dynamic-card-one/dynamic-card-one.component';
import {DynamicCardTwoComponent} from './dynamic-components/dynamic-card-two/dynamic-card-two.component';

export interface DynamicComponent {
  data: any;
}

export class DynamicItem {
  constructor(public component: Type<any>, public data: any) {
  }
}

@Injectable()
export class DynamicComponentService {

  constructor() { }

  buildDynamicList(): DynamicItem[] {
    return [
      {
        component: DynamicCardOneComponent,
        data: { title: 'One', msg: 'hoo' }
      },
      {
        component: DynamicCardTwoComponent,
        data: { title: 'Two', value: 1 }
      }
    ]
  }
}
