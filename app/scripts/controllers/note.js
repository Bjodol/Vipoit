
angular.module('note', ['blackboard'])
	.controller('noteCtrl', function($scope, blackboardService){

		$scope.addNote = function(note){
			var newNote = angular.copy(note);
			
			blackboardService.notes.push(newNote);
		
		}

		$scope.delete =function(note){
			var index = $scope.notes.indexOf(note);
			console.log(index);
			$scope.notes.splice(index, 1);

		}




		




	})

