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
	var stage = new createjs.Stage("demoCanvas");

    $scope.delete =function(note){
			var index = blackboardService.notes.indexOf(note);
			console.log(index);
			blackboardService.notes.splice(index, 1);
	}

	$scope.$watchCollection('notes', function(){
		if($scope.notes.length != 0){
			var noteToCreate = $scope.notes[$scope.notes.length-1];

			var noteColor = new createjs.Shape();
			noteColor.graphics.beginFill(noteToCreate.ColorValue).drawRect(-125,-125,250,250);
			
			var noteContent = new createjs.Text();
			noteContent.font = noteToCreate.fontSize + "px 'Just Another Hand', Helvetica, sans-serif"
			noteContent.text = noteToCreate.Content;
			noteContent.x = noteContent.y = -120;
			noteContent.textAlign = "left";
			noteContent.lineHeight = noteToCreate.fontSize + 2;
			console.log(noteContent.lineHeight);
			noteContent.lineWidth = 240;

			var note = new createjs.Container();
			note.x = note.y = 250;
			note.addChild(noteColor, noteContent);
			stage.addChild(note);

			note.on("pressmove", function(evt) {
				evt.currentTarget.x = evt.stageX;
		   		evt.currentTarget.y = evt.stageY; 	
		   		stage.update();
			});

			note.on("pressup", function(evt) { console.log("up"); })
			stage.update();
		}
	});

	$scope.doGreeting =function(greeting) {
		$window.alert(greeting);
	}

	
  });