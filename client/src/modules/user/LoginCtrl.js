'use strict';

angular

    .module('attendancer')

    .controller('LoginCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        // $scope.credentials;

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $rootScope.pageTitle = 'Login - Attendancer';

            $scope.credentials = {
                email: '',
                password: ''
            };

        };

        $scope.login = function () {

            sessionStorage.user = 'true';

            $rootScope.initializeUser().then(function () {

                var nextState = 'dashboard';

                if (sessionStorage.redirectState) {

                    nextState = sessionStorage.redirectState;

                    sessionStorage.removeItem('redirectState');

                }

                $rootScope.changeState(nextState);

            }, function () {

                $rootScope.notify('Failed.');

            });

        };

        /* --- RUN --- */

        $scope.initialize();

    }]);