'use strict';

angular.module('myApp.backlog', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/backlog', {
        templateUrl: 'backlog/backlogList.html',
        controller: 'backlogCtrl'
    }).when('/backlog/:backlogId', {
        templateUrl: 'backlog/backlogEdit.html',
        controller: 'backlogEditCtrl'
    }).otherwise({
        redirectTo: '/backlog'
    });
}])
.controller('backlogCtrl', ['$scope', 'Backlog', function($scope, Backlog) {
    $scope.backlogs = Backlog.query();
}])
.controller('backlogEditCtrl', ['$scope', '$routeParams', '$location','Backlog',
        function($scope, $routeParams, $location, Backlog) {
            if($routeParams.backlogId !== 'new'){
                $scope.backlog = Backlog.getBacklog({backlogId: $routeParams.backlogId});
            }
            $scope.save = function(){
                $scope.backlog.status = 'TO DO';
                var backlogs = window.localStorage.backlogs ? JSON.parse(window.localStorage.backlogs) : {};
                var nextId = window.localStorage.backlogs ? Backlog.query().length + 1 : 1;
                if(!$scope.backlog.id){
                    $scope.backlog.id = nextId;
                }
                backlogs[$scope.backlog.id] = $scope.backlog;
                window.localStorage.setItem('backlogs', JSON.stringify(backlogs));
                $location.path('/backlog');
            };
}]);