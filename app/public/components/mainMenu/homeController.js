(function(){
    "use strict";

    App.controller('homeController', ['$scope','$state','$http',
        function($scope, $state, $http) {


            $scope.loginLink = function() {
                $state.go('login');
            };

            $scope.testMenu = function() {
                $state.go('app.testMenu');
            };

            $scope.images = [
                './assets/img/laptop.in.use.png'
            ];
            $scope.coursesLink=function(){
                $state.go('app.courses');
            };

            $scope.register = function(){
                $state.go('signup');
            }
        }]);
})();