(function() {
  'use strict';

  angular
    .module('oldHeroes')
    .component('heroCard', {
      template: `
        <div ng-if="$ctrl.hero" class="redBox">
            <p>Its old card</p>
            <app-hero-item [hero]="$ctrl.hero" (delete)="$ctrl.delete"></app-hero-item>
        </div>
      `,
      // template: require('./hero-old.template.html'),
      controller: HeroCardController,
      bindings: {
        hero: '<',
        delete: '&'
      }
    });

  function HeroCardController($scope) {
    // console.log(this)
  }
})();
