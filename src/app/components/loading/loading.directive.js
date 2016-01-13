(function(){
    var template = '<div class="spinner" ng-show="isLoading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
        
   angular.module('demoApp.directives').directive('loading', function(){
      return {
          template : template,
          restrict: 'E',
          scope: {
              isLoading : '='
          }          
      } 
   });
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
})()










// 
//  angular.module('demoApp.directives').directive('loadingAnimation', function(){
//         return {
//             restrict: 'E',
//             scope : {
//                 isLoading : '='
//             },
//             template : '<div class="spinner" ng-show="isLoading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
//         }
//     })