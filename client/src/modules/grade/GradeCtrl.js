'use strict';

angular

    .module('attendancer')

    .controller('GradeCtrl', ['$rootScope', '$scope', 'Grade', function ($rootScope, $scope, Grade) {

        /* --- MODELS --- */

        // $scope.grade;
        // $scope.grades;
        // $scope.isEditorActive;
        // $scope.isNascent;

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            // Set page title
            $rootScope.pageTitle = 'Grade - Attendancer';

            $scope.grade = null;

            $scope.grades = [];

            $scope.isEditorActive = false;

            $scope.getGrades();

        };

        $scope.activateEditor = function (i) {

            $scope.isEditorActive = true;

            $scope.grade = $scope.grades[i];

        };

        $scope.deactivateEditor = function () {

            $scope.isEditorActive = false;

            $scope.grade = null;

        }

        $scope.getGrades = function () {

            Grade.list({ institutionId: 1 }).$promise.then(function (response) {

                $scope.grades = response;

            }, function () {

                $rootScope.notify('Failed.');

            });

        };

        $scope.updateGrade = function () {

            $scope.isNascent = true;

            $scope.grade.$save().then(function () {

                $scope.deactivateEditor();

                $scope.isNascent = false;

            }, function () {

                $rootScope.notify('Failed.');

                $scope.isNascent = false;

            });

        };

        /* --- RUN --- */

        // Initialize
        $scope.initialize();

    }]);