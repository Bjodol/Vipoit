
angular.module('note', ['blackboard'])
	.controller('noteCtrl', function($scope, blackboardService){

		$scope.note = {
		}

		$scope.addNote = function(){
			blackboardService.notes.push($scope.note);
			console.log(blackboardService.notes);
		}

	})

