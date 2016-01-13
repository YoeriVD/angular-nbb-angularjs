(function(){
    
    function FibonacciService($q, $timeout) {

            function fibonacci(n) {
                if (n == 1) return 1
                else return n + fibonacci(n - 1)
            }

            function promiseFibonacci(a) {
                var defer = $q.defer();
                $timeout(function () {
                    function fibonacci(n) {
                        defer.notify(n);
                        if (n == 1) return 1
                        else return n + fibonacci(n - 1)
                    }
                    var result;
                    try {
                        result = fibonacci(a);
                        defer.resolve(result);
                    } catch (e) {
                        defer.reject('We encoutered a problem, be aware calculation is limited to !15 000');
                    }
                }, 100)
                return defer.promise;
            }

            return {
                calculate: function calculate(n) {
                    // return $q(function (success, fail) {
                    //     var r;
                    //     try{
                    //         r = fibonacci(n);
                    //         success(r);
                    //     }catch(e){
                    //         fail('We encoutered a problem, be aware calculation is limited to !15 000');                                    
                    //     }
                    // });
                    return promiseFibonacci(n);

                }
            }
        }


angular.module('demoApp.services').factory('Fibonacci', FibonacciService );
    
    
})()