'use strict';

angular.module('angularTrainingApp')
  .directive('superhero', function () {
    return {
	    restrict: 'E',
	    scope: {},

	    controller: function($scope) {
	    $scope.abilities = [];

	    this.addStrength = function() {
	        $scope.abilities.push('strength');
	    }

	    this.addSpeed = function() {
	        $scope.abilities.push('speed');
	    }

	    this.addFlight = function() {
	        $scope.abilities.push('flight');
	    }
    },

    link: function(scope, element) {
        element.addClass('button');
        element.bind('mouseenter', function() {
            console.log(scope.abilities);
        })
    }
  }
});

angular.module('angularTrainingApp')
.directive('strength', function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addStrength();
        }
    }
})

angular.module('angularTrainingApp')
.directive('speed', function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addSpeed();
        }
    }
})

angular.module('angularTrainingApp')
.directive('flight', function() {
    return {
        require: 'superhero',
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addFlight();
        }
    }
})
