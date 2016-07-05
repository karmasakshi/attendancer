'use strict';

angular

    .module('attendancer')

    .controller('GradeCtrl', ['$rootScope', '$scope', 'Grade', function ($rootScope, $scope, Grade) {

        /* --- MODELS --- */

        // $scope.grades;

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            // Set page title
            $rootScope.pageTitle = 'Grade - Attendancer';

            $scope.grades = [];

            $scope.getGrades();

        };

        $scope.getGrades = function () {

            Grade.list({institutionId: 1}).$promise.then(function (response) {

                $scope.grades = response;

            });

        };

        /* --- RUN --- */

        // Initialize
        $scope.initialize();

    }]);