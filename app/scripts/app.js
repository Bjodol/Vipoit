'use strict';

/**
 * @ngdoc overview
 * @name vipoitApp
 * @description
 * # vipoitApp
 *
 * Main module of the application.
 */
angular
  .module('vipoitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'blackboard'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/test', {
        templateUrl: 'views/notetester.html',
        controller: 'blackboardCtrl',
        controllerAs: 'test'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/notetester', {
        templateUrl: 'views/notetester.html',
      
      })
      .otherwise({
        redirectTo: '/'
      });
  });
