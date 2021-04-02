(function() {
  'use strict';

  angular
    .module('oldHeroes')
    .component('heroOld', {
      // template: `
      //   <div ng-if="$ctrl.hero" class="redBox">
      //       <h1>Hero: {{ $ctrl.hero.name }} </h1>
      //       <p>Text: {{ $ctrl.text }} </p>
      //   </div>
      // `,
      // templateUrl: '@src/app/old/components/hero-old/hero-old.template.html',
      // templateUrl: './hero-old.template.html',
      template: require('@src/app/old/components/hero-old/hero-old.template.html'),
      controller: HeroOldController,
      bindings: {
        text: '<',
        hero: '<'
      }
    });

  function HeroOldController($scope) {
    console.log(this)
  }
})();
