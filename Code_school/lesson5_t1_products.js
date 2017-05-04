(function() {
var app = angular.module('store-products', []);

  app.directive("productTitle", function() {
    return {
      restrict: 'A',
      templateUrl: "lesson4_t1_product-title.html"
    };
  });

})();
