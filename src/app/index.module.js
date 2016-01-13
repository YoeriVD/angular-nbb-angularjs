(function() {
  'use strict';

  angular.module('demoApp.filters', [])
  angular.module('demoApp.directives', [])
  angular.module('demoApp.services', [])
  angular
    .module('demoApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 
    'ngAria', 'ngResource', 'ngRoute', 'toastr', 'demoApp.filters','demoApp.directives', 'demoApp.services']);

})();
