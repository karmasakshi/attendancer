'use strict';

angular

    .module('attendancer')

    .run(['ENV', 'VERSION', '$q', '$rootScope', '$state', function (ENV, VERSION, $q, $rootScope, $state) {

        /* --- MODELS --- */

        // $rootScope.pageTitle;
        // $rootScope.user;

        /* --- FUNCTIONS --- */

        $rootScope.initialize = function () {

            $rootScope.pageTitle = 'Attendancer';

            $rootScope.initializeUser();

        };

        $rootScope.initializeUser = function () {

            return $q(function (resolve, reject) {

                if (sessionStorage.user === 'true') {

                    $rootScope.user = true;

                    resolve();

                } else {

                    $rootScope.user = null;

                    reject();

                }

            });

        };

        $rootScope.changeState = function (state, options) {

            $state.go(state, options);

        };

        $rootScope.notify = function (message) {

            alert(message);

        };

        /* --- RUN --- */

        $rootScope.initialize();

    }]);