'use strict';

angular

    .module('attendancer')

    .controller('GradeCtrl', ['$rootScope', '$scope', 'Grade', function ($rootScope, $scope, Grade) {

        /* --- MODELS --- */

        // $scope.grade;
        // $scope.grades;
        // $scope.isAddGradeModalActive;
        // $scope.isEditGradeModalActive;
        // $scope.pendingTask;

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            // Set page title
            $rootScope.pageTitle = 'Grade - Attendancer';

            $scope.grade = null;

            $scope.grades = [];

            $scope.isAddGradeModalActive = false;

            $scope.isEditGradeModalActive = false;

            $scope.pendingTask = null;

            $scope.getGrades();

        };

        $scope.activateAddGradeModal = function () {

            $scope.isAddGradeModalActive = true;

            $scope.grade = {
                name: '',
                order: ''
            };

        };

        $scope.activateEditGradeModal = function (i) {

            $scope.isEditGradeModalActive = true;

            $scope.grade = $scope.grades[i];

            $scope.grade.index = i;

        };

        $scope.addGrade = function () {

            $scope.pendingTask = 'add';

            Grade.add($scope.grade).$promise.then(function (response) {

                $scope.grades.push(response);

                $scope.deactivateAddGradeModal();

                $scope.pendingTask = null;

            }, function () {

                $rootScope.notify('Failed.');

                $scope.pendingTask = null;

            });

        };

        $scope.deactivateAddGradeModal = function () {

            $scope.isAddGradeModalActive = false;

            $scope.grade = null;

        }

        $scope.deactivateEditGradeModal = function () {

            $scope.isEditGradeModalActive = false;

            $scope.grade = null;

        }

        $scope.deleteGrade = function () {

            Grade.verifyAndDelete({ id: $scope.grade.id }).$promise.then(function () {

                $scope.grades.splice($scope.grade.index, 1);

                $scope.deactivateEditGradeModal();

            }, function () {

                $rootScope.notify('Failed.');

            });

        };

        $scope.getGrades = function () {

            Grade.listWithCounts({ institutionId: 1 }).$promise.then(function (response) {

                $scope.grades = response;

            }, function () {

                $rootScope.notify('Failed.');

            });

        };

        $scope.updateGrade = function () {

            $scope.pendingTask = 'update';

            $scope.grade.$save().then(function () {

                $scope.deactivateEditGradeModal();

                $scope.pendingTask = null;

            }, function () {

                $rootScope.notify('Failed.');

                $scope.pendingTask = null;

            });

        };

        /* --- RUN --- */

        // Initialize
        $scope.initialize();

    }]);