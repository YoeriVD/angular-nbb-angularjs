describe('echoservice', function () {


    var EchoService, $timeout;

    beforeEach(function(){
        module('demoApp.services')
        inject(function(_EchoService_, _$timeout_){
            EchoService = _EchoService_;
            $timeout = _$timeout_
        })
    })


    it('should reply with the same message when the timeout expires', function(){
        var result;
        EchoService.shout('test').then(function(response){
            result = response;
        })
        $timeout.flush();
        expect(result).toBe('test');        
    })

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