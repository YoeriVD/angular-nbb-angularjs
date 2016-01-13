(function () {

    var $timeout, $q;
    
    function EchoService(_$timeout_, _$q_) {
        $timeout = _$timeout_;
        $q = _$q_;
    }

    EchoService.prototype.shout = function (message) {
        // //return the message after one second        
        // var defer = $q.defer();                                    
        // $timeout(function(){
        //     if(message.indexOf('!') > -1){
        //         defer.reject('NO SHOUTING!');
        //     }else { defer.resolve(message); }
        //     
        // }, 1000)    
        // return defer.promise;
        
        // other syntax, same logic
        
        return $q(function(succesFn /* resolve */, errorFn /* reject */, updateFn /* notify */){
            //return the message after one second   
            $timeout(function () {
                if (message.indexOf('!') > -1) {
                    errorFn('NO SHOUTING!');
                } else { succesFn(message); }
            }, 1000)  
        })
    }

    angular.module('demoApp.services').service('EchoService', EchoService)
})();












































// 
// 
//  var $timeout, $q;
//     function EchoService(_$timeout_, _$q_){
//         $timeout = _$timeout_;           
//         $q = _$q_;         
//     }
//     EchoService.prototype.shout = function(message){
//         // var deferred = $q.defer();
//         // $timeout(function(){
//         //     deferred.resolve(message)
//         // }, 1000)
//         // 
//         // return deferred.promise;
//         
//         return $q(function(successFn, errorFn){
//             $timeout(function () {
//                 successFn(message)
//             }, 1000)
//         })
//     }
//     
