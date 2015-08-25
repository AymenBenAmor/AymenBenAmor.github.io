'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.backlog',
  'myApp.sprint',
  'myApp.version',
  'sprintServices',
  'backlogServices',
  'ui.date'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/backlog'});
}]);
