'use strict';

angular

    .module('attendancer')

    .controller('DashboardCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

        /* --- MODELS --- */

        // $scope.modules;

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            // Set page title
            $rootScope.pageTitle = 'Dashboard - Attendancer';

            $scope.modules = [
                {
                    name: 'Grade',
                    meta: 'View and manage grades.',
                    imageURL: { 'background-image': 'url("https://unsplash.it/300/150/?random&x=grade")' },
                    description: 'In addition to managing grades, you can manage a grade\'s students and subjects here.',
                    state: 'grade'
                },
                {
                    name: 'Student',
                    meta: 'View and manage students.',
                    imageURL: { 'background-image': 'url("https://unsplash.it/300/150/?random&x=student")' },
                    description: 'In addition to managing students, you can manage a student\'s absence, grade and subjects here.',
                    state: 'home'
                },
                {
                    name: 'Subject',
                    meta: 'View and manage subjects.',
                    imageURL: { 'background-image': 'url("https://unsplash.it/300/150/?random&x=subject")' },
                    description: 'In addition to managing subjects, you can manage students that have opted for a subject here.',
                    state: 'home'
                },
                {
                    name: 'Lecture',
                    meta: 'View and manage past lectures.',
                    imageURL: { 'background-image': 'url("https://unsplash.it/300/150/?random&x=lecture")' },
                    description: 'In addition to managing lectures, you can manage a lecture\'s absentees here.',
                    state: 'home'
                },
                {
                    name: 'Absentee',
                    meta: 'View and manage past absentees.',
                    imageURL: { 'background-image': 'url("https://unsplash.it/300/150/?random&x=absentee")' },
                    description: 'View and manage past absentees.',
                    state: 'home'
                },
                {
                    name: 'Statistics',
                    meta: 'View various statistics.',
                    imageURL: { 'background-image': 'url("https://unsplash.it/300/150/?random&x=statistics")' },
                    description: 'View various statistics like most bunked lectures, student most absent and so on.',
                    state: 'home'
                }
            ];

        };

        /* --- RUN --- */

        $rootScope.initializeUser().then(function () {

            // Initialize
            $scope.initialize();

        }, function () {

            sessionStorage.redirectState = 'dashboard';

            $rootScope.changeState('login');

        });

    }]);