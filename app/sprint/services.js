var services = angular.module('sprintServices', ['ngResource']);

services.factory('Sprint', [
    function () {
        return {
            query: function () {
                return [
                    {
                        id: 1,
                        name: 'test',
                        description: 'test',
                        startDate: '01/12/2014',
                        endDate: '01/01/2015'
                    },
                    {
                        id: 2,
                        name: 'test2',
                        description: 'test2',
                        startDate: '01/01/2015',
                        endDate: '31/01/2015'
                    },
                    {
                        id: 3,
                        name: 'test4',
                        description: 'test4',
                        startDate: '01/01/2015',
                        endDate: '31/03/2015'
                    }
                ];
            },
            getSprint: function () {
                return {
                        id: 1,
                        name: 'test',
                        description: 'test',
                        startDate: '01/12/2014',
                        endDate: '01/01/2015'
                    };
            }
        };
    }]);