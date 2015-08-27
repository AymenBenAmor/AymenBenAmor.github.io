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
            queryNonAssignedBacklogs: function () {
              if(window.localStorage.backlogs){
                return $.map(JSON.parse(window.localStorage.backlogs), function(value) {
                  return value;
                }).filter(function(item){
                  return item.sprint !== 'chosen';
                });
              }else{
                return [];
              }
            },
            getBacklog: function (object) {
                var backlogs = JSON.parse(window.localStorage.backlogs);
                return backlogs[object.backlogId];
            },
            setBacklog: function (object) {
                var backlogs = JSON.parse(window.localStorage.backlogs);
                backlogs[object.backlogId] = object.backlog;
                window.localStorage.backlogs =  JSON.stringify(backlogs);
            }
        };
    }]);