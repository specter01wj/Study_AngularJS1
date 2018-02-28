(function(angular) {
  'use strict';
angular.module('docsIsolationExample', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
  }])
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      scope: {
        customerInfo: '=info',
        info2: '='
      },
      templateUrl: 'my-customer-plus-vojta.html'
    };
  });
})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/