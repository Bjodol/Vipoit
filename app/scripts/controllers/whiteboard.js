'use strict';

/**
 * @ngdoc function
 * @name vipoitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vipoitApp
 */
angular.module('whiteboard',[
	'blackboard'
	])
  .controller('whiteboardCtrl', function($scope, $window, blackboardService) {
    $scope.notes = blackboardService.notes;
	$scope.greeting = "This function has not yet been added.";

    $scope.delete =function(note){
			var index = blackboardService.notes.indexOf(note);
			console.log(index);
			blackboardService.notes.splice(index, 1);

		}

	$scope.gridsterOpts ={
		defaultSizeX: 1,
		defaultSizeY: 1,
		resizable: {
         enabled: false,
         start: function(event, uiWidget, $element) {}, // optional callback fired when resize is started,
         resize: function(event, uiWidget, $element) {}, // optional callback fired when item is resized,
         stop: function(event, uiWidget, $element) {} // optional callback fired when item is finished resizing
      }
	}


	$scope.doGreeting =function(greeting) {
		$window.alert(greeting);
	}

	
  });