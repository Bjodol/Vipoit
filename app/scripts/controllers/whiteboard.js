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

	 $scope.init = function(){

	 	var stage = new createjs.Stage("demoCanvas");
	 	var circle = new createjs.Shape();
		circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
		circle.x = 100;
		circle.y = 100;

		// <!-- drag and drop -->

		circle.addEventListener("pressmove", function(event) { })

		circle.addEventListener("pressup", function(event) { })
	
		circle.on("pressmove", function(evt) {
	 	 evt.target.x = evt.stageX;
   		 evt.target.y = evt.stageY; 	
		})

		circle.on("pressup", function(evt) { console.log("up"); })

		stage.addChild(circle);
		stage.update();
		console.log("Hei bJørn");
	}


	$scope.doGreeting =function(greeting) {
		$window.alert(greeting);
	}

	
  });