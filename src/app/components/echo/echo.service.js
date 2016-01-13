(function(){
    
   
    
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
//     angular.module('demoApp.services').service('EchoService', EchoService)