angular.module('clockApp', ['ngRoute'])
    .config(function ($routeProvider) {
        'use strict';

        $routeProvider.when('/', {
            controller: 'clockCtrl',
            templateUrl: 'partials/clock-view.html'
        }).when('/stop-watch', {
            controller: 'stopWatchCtrl',
            templateUrl: 'partials/stop-watch-view.html'
        }).otherwise({
            redirectTo: '/'
        });
    });