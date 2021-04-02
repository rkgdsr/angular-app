(function() {
  'use strict';

  angular
    .module('oldHeroes')
    .component('heroItemOld', {
      template: `
        <div ng-if="$ctrl.hero" class="redBox">
            <p>Its old</p>
            <app-hero-item [hero]="$ctrl.hero" (delete)="$ctrl.delete"></app-hero-item>
        </div>
      `,
      // template: require('./hero-old.template.html'),
      controller: HeroItemOldController,
      bindings: {
        hero: '<',
        delete: '&'
      }
    });

  function HeroItemOldController($scope) {
    console.log(this)
  }
})();
