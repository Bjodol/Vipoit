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
  .controller('whiteboardCtrl', function(blackboardService) {
    this.Notes = blackboardService.notes;
  });