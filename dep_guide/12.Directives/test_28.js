(function(){

  	var app = angular.module('docsBindExample', []);

	app.controller('Controller', ['$scope', function($scope) {
		$scope.name = 'James Wang';
	}]);

})();