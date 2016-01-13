describe('Filter: euroFilter', function () {
    var euroFilter;


    beforeEach(function () {
        module('demoApp.filters');
        inject(function ($filter) {
            euroFilter = $filter('euro');
        })
    })


    it("should return a number prefixed with EUR", function () {

        var result = euroFilter(5);
        expect(result).toBe('EUR5.00');
    });


});