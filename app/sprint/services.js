var services = angular.module('sprintServices', ['ngResource']);

services.factory('Sprint', ['$resource',
    function($resource){
        return $resource('sprint/:sprintId.json');
    }]);