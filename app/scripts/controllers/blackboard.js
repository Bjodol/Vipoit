'use strict';

/**
 * @ngdoc function
 * @name vipoitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vipoitApp
 */
angular.module('blackboard', [
	'noteController',
	'whiteboard'
	])
  .service('blackboardService', function () {
    this.Notes = [];
  });