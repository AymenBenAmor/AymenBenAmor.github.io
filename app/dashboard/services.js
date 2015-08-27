var services = angular.module('sprintServices', ['ngResource']);

services.factory('Sprint', [
    function () {
        return {
            query: function () {
                if(window.localStorage.sprints){
                    return $.map(JSON.parse(window.localStorage.sprints), function(value) {
                        return value;
                    });
                }else{
                    return [];
                }
            },
            getSprint: function (object) {
                var sprints = JSON.parse(window.localStorage.sprints);
                return sprints[object.sprintId];
            },
            setSprint: function (object) {
                var sprints = JSON.parse(window.localStorage.sprints);
                sprints[object.sprintId] = object.sprint;
                window.localStorage.sprints =  JSON.stringify(sprints);
            }
        };
    }]);