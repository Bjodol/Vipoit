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
  .controller('whiteboardCtrl', function($scope, blackboardService) {
    $scope.notes = blackboardService.notes;

    $scope.delete =function(note){
			var index = blackboardService.notes.indexOf(note);
			console.log(index);
			blackboardService.notes.splice(index, 1);

		}
  });