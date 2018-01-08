var app=angular.module("AngularService",['ui.router','AngularService.services','AngularService.controllers']);
app.constant('API_URL','http://192.168.1.7:8080');
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })
        .state('service', {
            url: '/service',
            templateUrl: 'templates/service.html',
            controller:'ServiceController'
        })
        .state('rest', {
            url: '/rest',
            templateUrl: 'templates/rest.html'
        });
});

/**
 * Created by icejdk on 1/5/18.
 */
