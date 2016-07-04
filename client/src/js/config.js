'use strict';

angular

    .module('attendancer')

    .config(['$compileProvider', '$stateProvider', '$urlRouterProvider', function ($compileProvider, $stateProvider, $urlRouterProvider) {

        $compileProvider.debugInfoEnabled(false);

        $stateProvider

            .state('home', {
                url: '/',
                template: '<h1>Home</h1>'
            })

            .state('login', {
                url: '/login',
                template: '<h1>Login</h1>'
            });

        $urlRouterProvider.otherwise('home');

    }]);