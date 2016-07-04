'use strict';

angular

    .module('attendancer')

    .controller('LoginCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        // $scope.credentials;

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            // Set page title
            $rootScope.pageTitle = 'Login - Attendancer';

            $scope.credentials = {
                email: '',
                password: ''
            };

        };

        $scope.login = function () {

            $rootScope.user = true;

            $rootScope.changeState('home');

        };

        /* --- RUN --- */

        // Initialize
        $scope.initialize();

    }]);