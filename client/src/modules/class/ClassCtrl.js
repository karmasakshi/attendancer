'use strict';

angular

    .module('attendancer')

    .controller('ClassCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            // Set page title
            $rootScope.pageTitle = 'Class - Attendancer';

        };

        /* --- RUN --- */

        // Initialize
        $scope.initialize();

    }]);