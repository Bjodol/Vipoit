
angular.module('note', ['blackboard'])
	.controller('noteCtrl', function($scope, blackboardService){

		$scope.addNote = function(note){
			var newNote = angular.copy(note);
			
			blackboardService.notes.push(newNote);
		
		}

	})

