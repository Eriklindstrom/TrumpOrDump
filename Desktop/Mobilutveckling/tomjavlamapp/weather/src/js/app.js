angular.module('BeerBuds', [
  'ngRoute',
  'mobile-angular-ui',
  'BeerBuds.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});