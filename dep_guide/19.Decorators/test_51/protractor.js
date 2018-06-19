it('should display log messages in dom', function() {
  element.all(by.repeater('l in myLog')).count().then(function(count) {
    expect(count).toEqual(6);
  });
});

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/