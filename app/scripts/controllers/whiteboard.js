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
	var stage = new createjs.Stage("demoCanvas");

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