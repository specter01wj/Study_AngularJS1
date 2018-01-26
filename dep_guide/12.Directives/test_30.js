(function(){

  	var app = angular.module('docsTemplateUrlDirective', []);

	app.controller('Controller', ['$scope', function($scope) {
	    $scope.customer = {
	      name: 'Naomi',
	      address: '1600 Amphitheatre'
	    };
	}]);

	app.directive('myCustomer', function() {
	    return {
	      templateUrl: 'my-customer.html'
	    };
	});

})();