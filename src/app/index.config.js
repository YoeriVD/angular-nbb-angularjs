(function() {
  'use strict';

  angular
    .module('demoApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, ThingServiceProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    ThingServiceProvider.url = 'somethingElse';
  }

})();
