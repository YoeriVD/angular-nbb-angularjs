(function () {

    function AlertController($scope) {
        var self = this;
        self.hide = true;
        $scope.$watch(function () {
            return self.message;
        }, function () {
            if (self.message) self.hide = false;
            else self.hide = true;
        })
    }
    AlertController.prototype.dismiss = function () {
        this.hide = true;
    }

    angular.module('demoApp.directives').directive('alert', function () {

        return {
            template: '<div ng-hide="alert.hide" class="alert alert-danger alert-dismissible" role="alert">'
            + '<button type="button" class="close" data-dismiss="alert" aria-label="Close" ng-click="alert.dismiss()"><span aria-hidden="true">&times;</span></button>'
            + '{{ alert.message }}'
            + '</div>',
            restrict: 'E',
            scope: {
                message: '='
            },
            controller: AlertController,
            controllerAs: 'alert',
            bindToController: true
        }
    });















})()























// 
//   function AlertController($scope) {
//         var self = this;
//         self.hide = true;
//         $scope.$watch(function(){return self.message;}, function(){
//            if(self.message)self.hide = false;
//            else self.hide = true;
//         })
//     }
// 
//     AlertController.prototype.dismiss = function () {
//         this.hide = true;
//         this.message = "";
//     }
//     angular.module('demoApp.directives').directive('alert', function () {
//         return {
//             restrict: 'E',
//             scope: {
//                 message: '='
//             },
//             template: '<div ng-hide="alert.hide" class="alert alert-danger alert-dismissible" role="alert">'
//             + '<button type="button" class="close" data-dismiss="alert" aria-label="Close" ng-click="alert.dismiss()"><span aria-hidden="true">&times;</span></button>'
//             + '{{ alert.message }}'
//             + '</div>',
//             controller: AlertController,
//             controllerAs: 'alert',
//             bindToController: true
//         }
//     })