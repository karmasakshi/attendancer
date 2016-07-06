'use strict';

angular

    .module('attendancer')

    .controller('HomeCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $rootScope.pageTitle = 'Home - Attendancer';

        };

        /* --- RUN --- */

        $scope.initialize();

    }]);