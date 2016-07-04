'use strict';

angular

    .module('attendancer')

    .controller('DashboardCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        // $scope.modules;

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            // Set page title
            $rootScope.pageTitle = 'Dashboard - Attendancer';

        };

        /* --- RUN --- */

        $rootScope.initializeUser().then(function () {

            // Initialize
            $scope.initialize();

        }, function () {

            sessionStorage.redirectState = 'dashboard';

            $rootScope.changeState('login');

        });

    }]);