'use strict';

angular

    .module('attendancer')

    .controller('HomeCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            // Set page title
            $rootScope.pageTitle = 'Home - Attendancer';

        };

        /* --- RUN --- */

        // Initialize
        $scope.initialize();

    }]);