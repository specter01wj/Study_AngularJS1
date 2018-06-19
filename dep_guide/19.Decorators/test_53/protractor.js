it('should default date filter to short date format', function() {
  expect(element(by.id('genesis')).getText())
    .toMatch(/Initial Commit default to short date: \d{1,2}\/\d{1,2}\/\d{2}/);
});

it('should still allow dates to be formatted', function() {
  expect(element(by.id('ngConf')).getText())
    .toMatch(/ng-conf 2016 with full date format: [A-Za-z]+, [A-Za-z]+ \d{1,2}, \d{4}/);
});

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/