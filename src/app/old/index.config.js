
import {AppComponent} from "../app.component";
import {HeroItemComponent} from "../components/hero-item/hero-item.component";
import {downgradeComponent} from "@angular/upgrade/static";

// (function() {
//   'use strict';
//
//
// })();

// angular
//   .module('oldHeroes', ['oldHeroes'])
//   .directive('oldHeroes', downgradeComponent({
//     component: AppComponent
//   }));

angular
  .module('oldHeroes', ['oldHeroes'])
  .directive('appHeroItem', downgradeComponent({
    component: HeroItemComponent,
    inputs: ['hero'],
    outputs: ['delete'],
  }));
