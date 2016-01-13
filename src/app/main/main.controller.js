(function () {
    'use strict';

    angular
        .module('demoApp')
        .controller('MainController', MainController)
        

    var $timeout;

    /** @ngInject */
    function MainController(_$timeout_, $http, ThingService, EchoService, Fibonacci) {
        $timeout = _$timeout_;
        var self = this;
        self.newThing = {};

        ThingService.get().then(function(things){
            self.coolThings = things;
        })
        
        
        self.update = "fibonacci: "
        Fibonacci.calculate(17000).then(console.log, console.error, function (update) {
            self.update += update + ", ";
        })
        // EchoService.shout("some message!").then(function(response){
        //     console.log(response);
        // }, function(response){
        //     console.error(response)
        // })
        
        
    }
    MainController.prototype.hideThing = function (thing) {
        thing.hidden = true;
    }

    MainController.prototype.saveThing = function () {
        var self = this;
        self.isLoading = true;

        $timeout(function () {
            self.coolThings.push(self.newThing);
            self.newthing = {}
            self.form.$setPristine();
            self.isLoading = false;
        }, 1000)


    }


    angular
        .module('demo', [])
        .controller('IndexController', MainController)
})();







