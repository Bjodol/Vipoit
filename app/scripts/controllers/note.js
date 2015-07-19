
angular.module('note', ['blackboard'])
	.controller{'NoteCtrl', function($scope, blackboardService){
		
		this.note = {
			"Id": id,
			"Content": content,
			"Color": color,
			"Author": author,
			"Position": Position;
		}

		$scope.addNote = function(){
			blackboardService.notes.push(this.note);
		}

	}}

