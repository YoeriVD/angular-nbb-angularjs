(function () {
    //service
    function ThingService($http) { //this function is the constructor of the service
        this.get = function () {
            return $http.get('assets/things.json').then(function (response) {
                return response.data;
            })
        }

    }
    //angular.module('demoApp.services').service("ThingService", ThingService);  

    //factory
    function ThingFactory($http) {

        function getTheData() {
            return $http.get('assets/things.json').then(function (response) {
                return response.data;
            })
        }

        return { //return an instance of the service
            get: getTheData
        }

    }
    //angular.module('demoApp.services').factory("ThingService", ThingFactory);
    

    function ThingProvider() {

        var self = this;
        self.url = 'assets/things.json';
        
        this.$get = function ($http) {
            function getTheData() {
                return $http.get(self.url).then(function (response) {
                    return response.data;
                })
            }
            return {
                get: getTheData
            }
        }
    }
       
    
    angular.module('demoApp.services').provider("ThingService", ThingProvider);

})();





























// 
// 
//     function ThingService($http) {
//         this.get = function () {
//             return $http.get('assets/things.json').then(function (response) {
//                 return response.data;
//             });
//         }
//     }
// 
//     function ThingFactory($http) {
//         function getTheData() {
//             return $http.get('assets/things.json').then(function (response) {
//                 return response.data;
//             });
//         }
// 
//         return {
//             get: getTheData
//         }
//     }
// 
//     function ThingProvider() {
//         var self = this;
//         self.url = 'assets/things.json'
// 
//         self.$get = function ($http) {
//             function getTheData() {
//                 return $http.get(self.url).then(function (response) {
//                     return response.data;
//                 });
//             }
//             return {
//                 get: getTheData
//             }
//         }
//     }