var services = angular.module('backlogServices', ['ngResource']);

services.factory('Backlog', ['$resource',
    function () {
        return {
            query: function () {
                return [
                    {
                        id: 1,
                        name: 'test',
                        description: 'test',
                        type: 'feature'
                    },
                    {
                        id: 2,
                        name: 'test2',
                        description: 'test2',
                        type: 'feature'
                    },
                    {
                        id: 3,
                        name: 'test4',
                        description: 'test4',
                        type: 'bug'
                    }
                ];
            },
            getBacklog: function () {
                return {
                    id: 3,
                    name: 'test4',
                    description: 'test4',
                    estimate: 5,
                    type: 'bug'
                };
            }
        };
    }]);