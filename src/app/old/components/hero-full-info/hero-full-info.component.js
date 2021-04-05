(function() {
  'use strict';

  angular
    .module('oldHeroes')
    .component('heroFullInfo', {
      template: `
        <div ng-if="$ctrl.hero" class="redBox">
            <h1>Hero: {{ $ctrl.hero.name }} </h1>
            <p>Text: {{ $ctrl.text }} </p>
        </div>
      `,
      // templateUrl: '@src/app/old/components/hero-old/hero-old.template.html',
      // templateUrl: './hero-old.template.html',
      // template: require('@src/app/old/components/hero-old/hero-old.template.html'),
      controller: HeroFullInfoController,
      bindings: {
        text: '<',
        hero: '<'
      }
    });

  function HeroFullInfoController() {
    // console.log(this)
  }
})();
