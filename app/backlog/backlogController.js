'use strict';

angular.module('myApp.backlog', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/backlog', {
        templateUrl: 'backlog/backlogList.html',
        controller: 'backlogCtrl'
    }).when('/backlog:backlogId', {
        templateUrl: 'backlog/backlogEdit.html',
        controller: 'backlogEditCtrl'
    }).when('/backlog:backlogId', {
        templateUrl: 'backlog/backlogEdit.html',
        controller: 'backlogEditCtrl'
    }).otherwise({
        redirectTo: '/backlog'
    });
}])
.controller('backlogCtrl', ['$scope', 'Backlog', function($scope, Backlog) {
    $scope.sprint = Backlog.query();
}])
.controller('backlogEditCtrl', ['$scope', '$routeParams', 'Backlog', function($scope, $routeParams, Backlog) {
    $scope.backlog = Backlog.get({backlogId: $routeParams.backlogId});
}]);
