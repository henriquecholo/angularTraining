'use strict';

describe('Service: avengers', function () {

  // load the service's module
  beforeEach(module('angularTrainingApp'));

  // instantiate service
  var avengers;
  beforeEach(inject(function (_avengers_) {
    avengers = _avengers_;
  }));

  it('should do something', function () {
    expect(!!avengers).toBe(true);
  });

});
