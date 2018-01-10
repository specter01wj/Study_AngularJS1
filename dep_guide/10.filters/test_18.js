(function(){

  	var app = angular.module('eventExample', []);

  	app.controller('MyController', ['$scope', 'reverseFilter', function($scope, reverseFilter) {
	  $scope.greeting = 'hello';
	  $scope.filteredGreeting = reverseFilter($scope.greeting);
	}]);

	app.filter('reverse', function() {
	  return function(input, uppercase) {
	    input = input || '';
	    var out = '';
	    for (var i = 0; i < input.length; i++) {
	      out = input.charAt(i) + out;
	    }
	    // conditional based on optional argument
	    if (uppercase) {
	      out = out.toUpperCase();
	    }
	    return out;
	  };
	});

})();