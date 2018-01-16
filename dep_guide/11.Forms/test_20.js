(function(){

  	var app = angular.module('eventExample', []);

  	app.controller('ExampleController', ['$scope', function($scope) {
      $scope.master = {};
      var arr1 = [];

      $scope.update = function(user) {
        //$scope.master = angular.copy(user);
        arr1.push(angular.copy(user));
        $scope.master = arr1;
      };

      $scope.reset = function() {
        //$scope.user = angular.copy($scope.master);
        $scope.user = {};
        $scope.master = {};
      };

      //$scope.reset();
    }]);

})();