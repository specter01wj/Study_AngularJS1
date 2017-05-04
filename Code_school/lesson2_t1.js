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
	  soldOut: false,
	  images: [
	  {
		  full: 'dodecahedron-01-full.jpg',
		  thumb: 'dodecahedron-01-thumb.jpg'
	  },
	  {
		  full: 'dodecahedron-02-full.jpg',
		  thumb: 'dodecahedron-02-thumb.jpg'
	  }
  ]
  },
  {
	  name: 'Bruce Lee',
	  price: 54.99,
	  description: 'TimberLand',
	  canPurchase: true,
	  soldOut: false,
	  images: [
	  {
		  full: 'dodecahedron-01-full.jpg',
		  thumb: 'dodecahedron-01-thumb.jpg'
	  },
	  {
		  full: 'dodecahedron-02-full.jpg',
		  thumb: 'dodecahedron-02-thumb.jpg'
	  }
  ]
  }
  ];
})();