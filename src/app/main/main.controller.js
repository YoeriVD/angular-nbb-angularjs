(function () {
    'use strict';

    angular
        .module('demoApp')
        .controller('MainController', MainController)
        

    var $timeout;

    /** @ngInject */
    function MainController(_$timeout_, $http, ThingService) {
        $timeout = _$timeout_;
        var self = this;
        self.newThing = {};

        ThingService.get().then(function(things){
            self.coolThings = things;
        })
        
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











// EchoService.shout("Hey!").then(console.log, console.error)



        // self.update = "fibonacci: "
        // Fibonacci.calculate(17000).then(console.log, console.error, function (update) {
        //     self.update += update + ", ";
        // })






// 
// .factory('Fibonacci', function ($q, $timeout) {
// 
//             function fibonacci(n) {
//                 if (n == 1) return 1
//                 else return n + fibonacci(n - 1)
//             }
// 
//             function promiseFibonacci(a) {
//                 var defer = $q.defer();
//                 $timeout(function () {
//                     function fibonacci(n) {
//                         defer.notify(n);
//                         if (n == 1) return 1
//                         else return n + fibonacci(n - 1)
//                     }
//                     var result;
//                     try {
//                         result = fibonacci(a);
//                         defer.resolve(result);
//                     } catch (e) {
//                         defer.reject('We encoutered a problem, be aware calculation is limited to !15 000');
//                     }
//                 }, 100)
//                 return defer.promise;
//             }
// 
//             return {
//                 calculate: function calculate(n) {
//                     // return $q(function (success, fail) {
//                     //     var r;
//                     //     try{
//                     //         r = fibonacci(n);
//                     //         success(r);
//                     //     }catch(e){
//                     //         fail('We encoutered a problem, be aware calculation is limited to !15 000');                                    
//                     //     }
//                     // });
//                     return promiseFibonacci(n);
// 
//                 }
//             }
//         });