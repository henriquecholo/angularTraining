'use strict';

angular
  .module('angularTrainingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'AvengersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
