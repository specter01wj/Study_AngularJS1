(function(){

  	var app = angular.module('eventExample', []);

  	app.controller('EventController', ['$scope', function($scope) {
	  var counter = 0;
	  var names = ['Igor', 'Misko', 'Chirayu', 'Lucas'];
	  /*
	   * expose the event object to the scope
	   */
	  $scope.clickMe = function(clickEvent) {
	    $scope.name = names[counter % names.length];
	    counter++;
	  };
	}]);

})();