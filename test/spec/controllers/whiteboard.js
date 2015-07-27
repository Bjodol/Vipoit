'use strict';

describe('Controller: whiteboardCtrl', function () {
	

	beforeEach(module('vipoitApp'));

  var WhiteCtrl,
    scope;
    // intialize the controller and mock scope.
   

    beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    
    WhiteCtrl = $controller('whiteboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

    

    it('Should run a create a Greeting window', function(){
	  	spyOn(window, 'alert')
    	scope.doGreeting();
    	expect(window.alert).toHaveBeenCalledWith(jasmine.any);

    });

     it('Should run a create a Greeting window', function(){
	  	spyOn(window, 'alert')
    	scope.doGreeting();
    	expect(window.alert).toHaveBeenCalled();
    });


    it('Should match greeting with greeting', function () {
    expect(scope.greeting).toBe("This function has not yet been added.");
  });

    it('should react on doubleClick', function(){

    	expect(scope.doubleClickVar).toBe(false);

    });



});