'use strict';

angular

    .module('attendancer')

    .controller('GradeCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            // Set page title
            $rootScope.pageTitle = 'Grade - Attendancer';

        };

        /* --- RUN --- */

        // Initialize
        $scope.initialize();

    }]);