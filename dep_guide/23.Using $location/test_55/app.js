(function(angular) {
  'use strict';
angular.module('hashbang-mode', ['fake-browser', 'address-bar'])

// Configure the fakeBrowser. Do not set these values in actual projects.
.constant('initUrl', 'http://www.example.com/base/index.html#!/path?a=b#h')
.constant('baseHref', '/base/index.html')
.value('$sniffer', { history: false })

.config(function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
})

.controller('LocationController', function($scope, $location) {
  $scope.$location = {};
  angular.forEach('protocol host port path search hash'.split(' '), function(method) {
    $scope.$location[method] = function() {
      var result = $location[method]();
      return angular.isObject(result) ? angular.toJson(result) : result;
    };
  });
})

.run(function($rootElement) {
  $rootElement.on('click', function(e) {
    e.stopPropagation();
  });
});
})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/