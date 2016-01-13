(function () {
    'use strict';

    angular
        .module('demoApp')
        .config(routeConfig);

    function routeConfig($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
        //mydomain.com/#/thing/car
            .when('/thing/:thing', {
                templateUrl: 'app/thing/thing.html',
                controller: 'ThingController',
                controllerAs: 'thing'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();


























// 
//       .when('/thing/:thing',{
//           templateUrl: 'app/thing/thing.html',
//           controller: 'ThingController',
//           controllerAs: 'thing'
//       })