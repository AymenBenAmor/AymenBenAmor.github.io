var services = angular.module('backlogServices', ['ngResource']);

services.factory('Backlog', ['$resource',
    function($resource){
        return $resource('backlog/:backlogId.json');
    }]);