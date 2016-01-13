describe('echoservice', function () {



})





































// 
// 
// 
//     var EchoService, $rootScope, $timeout;
// 
//     beforeEach(function () {
//         module('demoApp.services')
//         inject(function (_EchoService_, _$rootScope_, _$timeout_) {
//             EchoService = _EchoService_;
//             $rootScope = _$rootScope_;
//             $timeout = _$timeout_;
//         })
//     })
// 
//     it("should return a promise", function () {
//         var result;
//         EchoService.shout('test').then(function (returnFromPromise) {
//             result = returnFromPromise;
//         })
//         $timeout.flush();
//         $rootScope.$apply();
//         expect(result).toBe('test');
//     })