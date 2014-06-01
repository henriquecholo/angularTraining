'use strict';

describe('Directive: superhero', function () {

  // load the directive's module
  beforeEach(module('angularTrainingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<superhero></superhero>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the superhero directive');
  }));
});
