'use strict';

angular

    .module('attendancer')

    .config(['$compileProvider', '$stateProvider', '$urlRouterProvider', 'LoopBackResourceProvider', function ($compileProvider, $stateProvider, $urlRouterProvider, LoopBackResourceProvider) {

        $compileProvider.debugInfoEnabled(false);

        LoopBackResourceProvider.setUrlBase('http://0.0.0.0:3000/api');

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