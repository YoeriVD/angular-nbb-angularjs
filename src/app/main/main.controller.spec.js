describe('Controller : Main', function () {

    var $controller, ThingService, $q, $rootScope;

    beforeEach(function () {
        module('demoApp');
        inject(function (_$controller_, _ThingService_, _$q_, _$rootScope_) {
            $controller = _$controller_;
            ThingService = _ThingService_;
            $q = _$q_; 
            $rootScope = _$rootScope_;         
        })
    })


    it("should get a list from the server", function () {
        var defer = $q.defer();
        spyOn(ThingService, 'get').and.returnValue(defer.promise)

        var controller = $controller('MainController');
        
        var listOfThings = [{ title : 'a thing'}]
        
        defer.resolve(listOfThings);
        
        $rootScope.$digest();
        
        expect(controller.coolThings.length).toBe(1);
    })
})











// 
//             $q = _$q_;
//             $rootScope = _$rootScope_

// 
//         var defer = $q.deferred();
//         spyOn(ThingService, 'get').and.returnValue(defer.promise)

// 
//         defer.resolve('echo');
//         $rootScope.$digest();

























// 
//     var $controller;
//     var $httpBackend;
// 
//     beforeEach(function () {
//         module('demoApp');
//         inject(function (_$httpBackend_, _$controller_) {
//             $controller = _$controller_;
//             $httpBackend = _$httpBackend_;
//         })
//     })
// 
//     it('should fetch the data', function () {
//         var thing = { title: 'test' }
//         $httpBackend.expectGET('assets/things.json').respond([thing]);
//         var controller = $controller('MainController')
//         $httpBackend.flush();
//         expect(controller.coolThings.length).toBe(1);
//     })
// 
//     afterEach(function () {
//         $httpBackend.verifyNoOutstandingExpectation();
//         $httpBackend.verifyNoOutstandingRequest();
//     })