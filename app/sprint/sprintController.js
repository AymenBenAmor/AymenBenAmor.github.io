'use strict';

angular.module('myApp.sprint', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/sprint', {
        templateUrl: 'sprint/sprintList.html',
        controller: 'sprintCtrl'
    });
}])

.controller('sprintCtrl', [function () {
    console.log('test2');
}]);