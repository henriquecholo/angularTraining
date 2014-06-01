'use strict';

angular.module('angularTrainingApp')
  .directive('panel', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the panel directive');
        element.bind('mouseleave', function() {
          element.removeClass('panel');
        });
        element.bind('mouseenter', function() {
          element.addClass('panel');
        });
      }
    };
  });
