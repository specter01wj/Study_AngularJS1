(function() {
var app = angular.module('store-products', []);

  app.directive("productTitle", function() {
    return {
      restrict: 'A',
      templateUrl: "lesson5_t2_product-title.html"
    };
  });

})();
