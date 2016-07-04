'use strict';

angular

    .module('attendancer')

    .run(['ENV', 'VERSION', '$rootScope', '$state', function (ENV, VERSION, $rootScope, $state) {

        /* --- MODELS --- */

        // $rootScope.pageTitle;
        // $rootScope.user;

        /* --- FUNCTIONS --- */

        $rootScope.initialize = function () {

            // Set page title
            $rootScope.pageTitle = 'Attendancer';

            $rootScope.initializeUser();

        };

        $rootScope.initializeUser = function () {

            $rootScope.user = null;

        };

        $rootScope.changeState = function (state, options) {

            $state.go(state, options);

        };

        /* --- RUN --- */

        // Initialize
        $rootScope.initialize();

    }]);