var services = angular.module('backlogServices', ['ngResource']);

services.factory('Backlog', ['$resource',
    function () {
        return {
            query: function () {
                if(window.localStorage.backlogs){
                    return $.map(JSON.parse(window.localStorage.backlogs), function(value) {
                        return value;
                    });
                }else{
                    return [];
                }
            },
            getSprint: function (object) {
                var sprints = JSON.parse(window.localStorage.backlogs);
                return sprints[object.backlogId];
            }
        };
    }]);