'use strict';

/**
 * @ngdoc function
 * @name vipoitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vipoitApp
 */
angular.module('blackboard', [
	'note',
	'whiteboard'
	])
	.controller('blackboardCtrl', function(){
		//Will probably come more in the future
	})
  .service('blackboardService', function (){
    this.notes = [];
  });