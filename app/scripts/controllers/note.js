
angular.module('note', ['blackboard', 'ngFitText'])
	.controller('noteCtrl', function($scope, blackboardService){
		
		$scope.note = {};
		$scope.note.Color="note-yellow"
		$scope.colors = blackboardService.noteColors;

		$scope.addNote = function(){
			var newNote = angular.copy($scope.note);
			blackboardService.notes.push(newNote);
		}

		$scope.setColor = function(color){
			switch(color) {
	      		case 'note-pink':
	         		$scope.note.Color = "note-pink";
	         		console.log($scope.note.Color);
	         	break;
	      		case 'note-yellow':
			        $scope.note.Color = "note-yellow";
			        console.log($scope.note.Color);
			    break;
			    case 'note-purple':
	         		$scope.note.Color = "note-purple";
	         		console.log($scope.note.Color);
	         	break;
	         	case 'note-dark-blue':
	         		$scope.note.Color = "note-dark-blue";
	         		console.log($scope.note.Color);
	         	break;
	         	case 'note-light-blue':
	         		$scope.note.Color = "note-light-blue";
	         		console.log($scope.note.Color);
	         	break;
			    case 'note-green':
	         		$scope.note.Color = "note-green";
	         		console.log($scope.note.Color);
	         	break;
      		default:
         		console.log('There should not be a default failover at this thing.');
			}
		}
	})

