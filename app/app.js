'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.backlog',
  'myApp.sprint',
  'sprintServices',
  'backlogServices',
  'ui.date',
  'ui.sortable'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/backlog'});
}]);
