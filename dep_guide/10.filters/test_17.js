(function(){

  	var app = angular.module('eventExample', []);

  	app.controller('FilterController', ['filterFilter', function FilterController(filterFilter) {
	  this.array = [
	    {name: 'Tobias'},
	    {name: 'Jeff'},
	    {name: 'Brian'},
	    {name: 'Igor'},
	    {name: 'James'},
	    {name: 'Brad'}
	  ];
	  this.filteredArray = filterFilter(this.array, 'a');
	}]);

})();