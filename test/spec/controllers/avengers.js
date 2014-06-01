'use strict';

describe('Controller: AvengersCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTrainingApp'));

  var AvengersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AvengersCtrl = $controller('AvengersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
