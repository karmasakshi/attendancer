'use strict';

angular

    .module('attendancer')

    .controller('LogoutCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            sessionStorage.clear();

            $rootScope.user = null;

            $rootScope.changeState('login');

        };

        /* --- RUN --- */

        // Initialize
        $scope.initialize();

    }]);