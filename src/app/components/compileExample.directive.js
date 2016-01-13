(function(){
    angular.module('demoApp.directives').directive('compileExample', function($log){
        return {
            restrict : 'E',
            template:'<p>hey!</p>',
            compile: function (){                
                $log.log('hello from compile');                
                return function (){
                    $log.log('hello from link');
                }
            }
        }
    })
})()