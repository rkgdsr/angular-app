
import {AppComponent} from "../app.component";
import {HeroItemComponent} from "../components/hero-item/hero-item.component";
import {downgradeComponent} from "@angular/upgrade/static";

// (function() {
//   'use strict';
//
//
// })();

angular
  .module('oldHeroesShare', ['oldHeroes'])
  .directive('oldHeroes', downgradeComponent({
    component: AppComponent
  }));

angular
  .module('oldHeroesShare', ['oldHeroes'])
  .directive('appHeroItem', downgradeComponent({
    component: HeroItemComponent,
    inputs: ['hero'],
    outputs: ['delete'],
  }));
