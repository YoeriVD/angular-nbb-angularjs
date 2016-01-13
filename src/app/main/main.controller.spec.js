xdescribe('Controller : Main', function () {

    var $controller, ThingService;

    var thing = {
        title: 'test'
    }

    beforeEach(function () {
        module('demoApp');
        inject(function (_$controller_, _ThingService_) {
            $controller = _$controller_;
            ThingService = _ThingService_;
            spyOn(ThingService, 'get').and.callFake(function () {
                //return an object that looks like a promise
                return { then: function (fn) { fn([thing]) } };
            })            
        })
    })


    it("should get a list from the server", function () {

        var controller = $controller('MainController');
        
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