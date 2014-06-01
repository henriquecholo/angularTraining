'use strict';

angular.module('angularTrainingApp')
  .controller('AvengersCtrl', function ($scope, Avengers) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.avengers = Avengers.avengers();
  });
