'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashboardCtrl'
    }).otherwise({
      redirectTo: '/dashboard'
    });
  }])

  .controller('dashboardCtrl', ['$scope', 'Sprint', 'Backlog', function($scope, Sprint, Backlog) {
    $scope.sprints = Sprint.queryStartedSprints();
    $scope.sortableOptions = {
      connectWith: '.tasks_list',
      update: function(e, ui){
        var model = ui.item.sortable.model;
        if(ui.item.sortable.droptarget[0].classList[0] === 'to_do' ){
          model = 'TO DO';
        }else{
          ui.item.sortable.model.status = ui.item.sortable.droptarget[0].classList[0];
        }
        Backlog.setBacklog({backlogId: model.id, backlog: model});
      }
    };
    $scope.query = {status : 'TO DO'};
  }]);