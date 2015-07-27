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
    $scope.htmlElements = blackboardService.htmlElements;
	$scope.greeting = "This function has not yet been added.";
	$scope.doubleClickVar = false;
	$scope.colors = blackboardService.noteColors;

	window.addEventListener('resize', resize, false);
	var stage = new createjs.Stage("whiteboard");
	stage.canvas.width = document.getElementById("whiteboardContainer").offsetWidth;
	stage.canvas.height = document.getElementById("whiteboardContainer").offsetHeight;

	function resize() {
		stage.canvas.width = document.getElementById("whiteboardContainer").offsetWidth;
		stage.canvas.height = document.getElementById("whiteboardContainer").offsetHeight;
	}

    $scope.delete =function(note){
			var index = blackboardService.notes.indexOf(note);
			console.log(index);
			blackboardService.notes.splice(index, 1);
	}

	$scope.$watchCollection('htmlElements', function(){
		//$scope.addNote = function(){
		if($scope.notes.length != 0){
			var noteToCreate = $scope.htmlElements[$scope.htmlElements.length-1].note;
			var htmlElement = $scope.htmlElements[$scope.htmlElements.length-1].element;
			var noteColor = new createjs.Shape();
			noteColor.graphics.beginFill("#ffffff").drawRect(-120,-120,250,250);
			var noteContent = new createjs.DOMElement(htmlElement.get(0));
			noteContent.x = noteContent.y = -120;
			var note = new createjs.Container();
			note.addChild(note.Content);
			note.x = note.y = 250;
			note.addChild(noteColor, noteContent);
			stage.addChild(note);
			// Drag and drop functionality
			note.on("pressmove", function(evt) {
				evt.currentTarget.x = evt.stageX;
		   		evt.currentTarget.y = evt.stageY; 	
		   		stage.update();
			});

			note.on("pressup", function(evt) { console.log("up"); })
			stage.update();

			// Double Click functionality.

			note.on("dblclick", function (evt){
				console.log("doubleTrouble");
			})



		}
	});

	$scope.doGreeting =function(greeting) {
		$window.alert(greeting);
	}

	$scope.setColor = function(color, note){
		switch(color) {
      		case 'note-pink':
         		note.Color = "note-pink";
         		note.ColorValue = "#eedbf3";
         	break;
      		case 'note-yellow':
		        note.Color = "note-yellow";
		        note.ColorValue = "#fcf0ad";
		    break;
		    case 'note-purple':
         		note.Color = "note-purple";
         		note.ColorValue = "#b4a7d6";
         	break;
         	case 'note-dark-blue':
         		note.Color = "note-dark-blue";
         		note.ColorValue = "#a4c2f4";
         	break;
         	case 'note-light-blue':
         		note.Color = "note-light-blue";
         		note.ColorValue = "#caf0f3";
         	break;
		    case 'note-green':
         		note.Color = "note-green";
         		note.ColorValue = "#c5f3c5";
         	break;
  		default:
     		console.log('There should not be a default failover at this thing.');
		}
	}

	$scope.deleteNote = function(note){
		blackboardService.notes.splice(blackboardService.notes.indexOf(note), 1);
	}

	
  }).directive('notedirective', function(blackboardService){
  	return {
  		link: function(scope, element, attr){
  			var htmlElement = {};
  			htmlElement.element = element;
  			htmlElement.note = blackboardService.notes[blackboardService.notes.length-1];
  			blackboardService.htmlElements.push(htmlElement);
			console.log(blackboardService.htmlElements);
  		}
  	}
  });