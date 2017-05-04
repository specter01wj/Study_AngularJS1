(function(){
  var app = angular.module('Gemstore',[]);
  app.controller('store_con', function(){
	  this.products = gems;
  });
  
  var gems = [
  {
	  name: 'Jin Wang',
	  price: 3.99,
	  description: 'Nike Free',
	  canPurchase: true,
	  soldOut: true
  },
  {
	  name: 'Bruce Lee',
	  price: 54.99,
	  description: 'TimberLand',
	  canPurchase: true,
	  soldOut: false
  }
  ];
})();