describe("Directive: loading directive", function () {
    
    var $compile, $scope;
    
    beforeEach(function(){
        module('demoApp.directives')
        
        inject(function(_$compile_, $rootScope){
            $compile = _$compile_;
            $scope = $rootScope.$new();
        })
    })
    
    it('should be hidden by default', function(){
        var element = $compile('<loading></loading>')($scope)
        //var controller = element.controller('loading')
        
        var scope = element.isolateScope();
        
        expect(scope.isLoading).toBeFalsy();
    })
    
     it('should be shown when is-loading is changed to true', function(){
        var element = $compile('<loading is-loading="true"></loading>')($scope)
        //var controller = element.controller('loading')        
        var scope = element.isolateScope();        
        expect(scope.isLoading).toBe(true);
        scope.isLoading = false;
        scope.$digest();
        expect(scope.isLoading).toBe(false);
    })
    
    
    
    
})





























// 
// var $compile, $scope;
// 
//     beforeEach(function () {
//         module('demoApp.directives')
//         inject(function (_$compile_, $rootScope) {
//             $compile = _$compile_;
//             $scope = $rootScope.$new();
//         })
//     })
// 
//     it('should have isLoading as false', function () {
//         var element = $compile('<loading-animation is-loading="false"></loading-animation>')($scope);
//         var scope = element.isolateScope();
//         
//         expect(scope.isLoading).toBe(false);
//     })
//     
//         it('should have isLoading as false', function () {
//         var element = $compile('<loading-animation is-loading="true"></loading-animation>')($scope);
//         var scope = element.isolateScope();
//         
//         expect(scope.isLoading).toBe(true);
//     })