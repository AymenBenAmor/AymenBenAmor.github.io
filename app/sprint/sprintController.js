'use strict';

angular.module('myApp.sprint', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/sprint', {
        templateUrl: 'sprint/sprintList.html',
        controller: 'sprintCtrl'
    }).when('/sprint:sprintId', {
        templateUrl: 'sprint/sprintEdit.html',
        controller: 'sprintEditCtrl'
    }).when('/sprint/new', {
        templateUrl: 'sprint/sprintEdit.html',
        controller: 'sprintEditCtrl'
    }).otherwise({
        redirectTo: '/sprint'
    });
}])

.controller('sprintCtrl', ['$scope', 'Sprint', function($scope, Sprint) {
    $scope.sprint = Sprint.query();
}])
.controller('sprintEditCtrl', ['$scope', '$routeParams', 'Sprint', function($scope, $routeParams, Sprint) {
    $scope.sprint = Sprint.get({sprintId: $routeParams.sprintId});
}]);