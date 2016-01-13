describe('thing controller', function(){
    
    var $controller, $routeParams;
    
    beforeEach(function(){
        module('demoApp')
        inject(function(_$controller_, _$routeParams_){
            $controller = _$controller_;
            $routeParams = _$routeParams_;
        })
    })
    
    it('should show an audi', function(){
        //set routeParams
        $routeParams.thing = 'car';
        
        var controller = $controller('ThingController')
        
        expect(controller.image).toContain('audi')
        
    })
    
    
})


















//$routeParams.thing = 'car'