describe('ThingService', function(){
    
    var $httpBackend, ThingService;    
        
    beforeEach(function(){
        module('demoApp.services')  
        inject(function(_$httpBackend_, _ThingService_){
            $httpBackend = _$httpBackend_
            ThingService = _ThingService_
        })
    })
    
    it("should perform a get", function(){
        
        var thing = { title: 'test thing'};
        $httpBackend.expectGET('assets/things.json').respond([thing]);
        var result;
        
        ThingService.get().then(function(data){
            result = data;
        })
        
        $httpBackend.flush();
        expect(result[0]).toEqual(thing);
    })
    
    
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
})












// 
//         inject(function(ThingService){
//             ThingService.get().then(function(data){
//                 result = data;
//             })
//         })