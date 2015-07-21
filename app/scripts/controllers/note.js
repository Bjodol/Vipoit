
angular.module('note', ['blackboard'])
	.controller('noteCtrl', function($scope, blackboardService){
		
		$scope.note = {};
		$scope.note.Color="note-yellow"
		$scope.note.ColorValue="#fcf0ad"
		$scope.colors = blackboardService.noteColors;

		$scope.addNote = function(){
			var newNote = angular.copy($scope.note);
			blackboardService.notes.push(newNote);
			console.log($scope.note.fontSize);

			
		}

		$scope.textResize = function(){
			var x=document.getElementById("note-content");
			var minSize = 24;
			var initialSize=75-x.value.length;
			initialSize=initialSize<=minSize?minSize:initialSize;
			x.style.fontSize = initialSize + "px";
			$scope.note.fontSize = initialSize;
		}

		$scope.setColor = function(color){
			switch(color) {
	      		case 'note-pink':
	         		$scope.note.Color = "note-pink";
	         		$scope.note.ColorValue = "#eedbf3";
	         		console.log($scope.note.Color);
	         	break;
	      		case 'note-yellow':
			        $scope.note.Color = "note-yellow";
			        $scope.note.ColorValue = "#fcf0ad";
			        console.log($scope.note.Color);
			    break;
			    case 'note-purple':
	         		$scope.note.Color = "note-purple";
	         		$scope.note.ColorValue = "#b4a7d6";
	         		console.log($scope.note.Color);
	         	break;
	         	case 'note-dark-blue':
	         		$scope.note.Color = "note-dark-blue";
	         		$scope.note.ColorValue = "#a4c2f4";
	         		console.log($scope.note.Color);
	         	break;
	         	case 'note-light-blue':
	         		$scope.note.Color = "note-light-blue";
	         		$scope.note.ColorValue = "#caf0f3";
	         		console.log($scope.note.Color);
	         	break;
			    case 'note-green':
	         		$scope.note.Color = "note-green";
	         		$scope.note.ColorValue = "#c5f3c5";
	         		console.log($scope.note.Color);
	         	break;
      		default:
         		console.log('There should not be a default failover at this thing.');
			}
		}
	})

