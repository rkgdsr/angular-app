import {AppComponent} from "../app.component";
import {downgradeComponent} from "@angular/upgrade/static";

(function() {
  'use strict';

  angular
    .module('oldHeroesShare', ['oldHeroes'])
    .directive('oldHeroes', downgradeComponent({
      component: AppComponent
    }));
})();
