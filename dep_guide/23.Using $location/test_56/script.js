(function(angular) {
  'use strict';
angular.module('locationExample', [])
  .controller('LocationController', ['$scope', '$location', function($scope, $location) {
    $scope.locationPath = function(newLocation) {
      return $location.path(newLocation);
    };
  }]);
})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/