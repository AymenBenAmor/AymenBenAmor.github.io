'use strict';

angular.module('myApp.sprint', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/sprint', {
        templateUrl: 'sprint/sprintList.html',
        controller: 'sprintCtrl'
    }).when('/sprint/:sprintId', {
        templateUrl: 'sprint/sprintEdit.html',
        controller: 'sprintEditCtrl'
    }).otherwise({
        redirectTo: '/sprint'
    });
}])

.controller('sprintCtrl', ['$scope', 'Sprint', 'Backlog', function($scope, Sprint, Backlog) {
    $scope.sprints = Sprint.query();
    $scope.sortableOptions = {
        connectWith: '.sprints_list',
        update: function(e, ui){
          window.localStorage.setItem('sprints', JSON.stringify($scope.sprints));
          var model = ui.item.sortable.model;
          model.sprint = 'chosen';
          Backlog.setBacklog({backlogId: model.id, backlog: model});
        }
    };
    $scope.backlogs = Backlog.queryNonAssignedBacklogs();
    $scope.startSprint = function(sprint,status){
      sprint.status = status;
      Sprint.setSprint({sprintId: sprint.id, sprint: sprint});
    };
}])
.controller('sprintEditCtrl', ['$scope', '$routeParams', '$location', 'Sprint',
        function($scope, $routeParams, $location, Sprint) {
    if($routeParams.sprintId !== 'new'){
        $scope.sprint = Sprint.getSprint({sprintId: $routeParams.sprintId});
    }
    $scope.save = function(){
        var sprints = Sprint.getSprintsObject();
        var nextId = window.localStorage.sprints ? Sprint.query().length + 1 : 1;
        if(!$scope.sprint.id){
            $scope.sprint.id = nextId;
        }
        if(!$scope.sprint.backlogs){
            $scope.sprint.backlogs = [];
        }
        sprints[$scope.sprint.id] = $scope.sprint;
        Sprint.setSprints(sprints);
        $location.path('/sprint');
    };
}]);