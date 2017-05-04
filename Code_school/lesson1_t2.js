(function(){
  var app = angular.module('Gemstore',[]);
  app.controller('store_con', function(){
	  this.product = gem;
  });
  
  var gem = {
	  name: 'Jin Wang',
	  price: 3.99,
	  description: 'fuck you!',
  }
  
})();