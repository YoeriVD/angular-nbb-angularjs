(function () {
    angular.module('demoApp.filters', [])
        .filter('euro', function ($filter) {
            var currencyFilter = $filter('currency');
            return function (input) {
                return currencyFilter(input, 'EUR')
            }
        })
})();


