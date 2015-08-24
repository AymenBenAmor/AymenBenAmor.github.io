'use strict';

angular.module('myApp.backlog', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/backlog', {
        templateUrl: 'backlog/backlogList.html',
        controller: 'backlogCtrl'
    });
}])

.controller('backlogCtrl', [function () {
console.log('test');
}]);