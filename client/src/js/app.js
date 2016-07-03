angular
  .module('attendancer', ['lbServices', 'ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '',
        template: '<h1>Hey!</h1>'
      });

    $urlRouterProvider.otherwise('home');

  }]);