'use strict';

angular

    .module('attendancer')

    .config(['$compileProvider', '$stateProvider', '$urlRouterProvider', function ($compileProvider, $stateProvider, $urlRouterProvider) {

        $compileProvider.debugInfoEnabled(false);

        $stateProvider

            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: 'modules/home/home.html'
            })

            .state('dashboard', {
                url: '/dashboard',
                controller: 'DashboardCtrl',
                templateUrl: 'modules/dashboard/dashboard.html'
            })

            .state('grade', {
                url: '/grades',
                controller: 'GradeCtrl',
                templateUrl: 'modules/grade/grade.html'
            })

            .state('login', {
                url: '/login',
                controller: 'LoginCtrl',
                templateUrl: 'modules/user/login.html'
            })

            .state('logout', {
                url: '/logout',
                controller: 'LogoutCtrl'
            });

        $urlRouterProvider.otherwise('/');

    }]);