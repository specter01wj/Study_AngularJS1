(function(){

  	var app = angular.module('eventExample', []);

  	app.controller('MyController', ['$scope', 'decoration', function($scope, decoration) {
	  $scope.greeting = 'hello';
	  $scope.decoration = decoration;
	}]);

	app.filter('decorate', ['decoration', function(decoration) {

	  function decorateFilter(input) {
	    return decoration.symbol + input + decoration.symbol;
	  }
	  decorateFilter.$stateful = true;

	  return decorateFilter;
	}]);

	app.value('decoration', {symbol: '*'});

})();