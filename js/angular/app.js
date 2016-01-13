var app = angular.module('app', ['ui.router', 'ngCookies', 'xeditable']);
app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});


app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider.state('items', {
    url: '/lists/:listId/items',
    templateUrl: 'items.html',
    controllerProvider: function() {
      return 'itemsController';
    }
  }).state('/', {
    url: '/',
    templateUrl: 'index.html',
    controllerProvider: function() {
      return 'sessionsController';
    }
  })
}])
