'use strict';


// Declare app level module which depends on filters, and services
angular.module('F1FeederApp', [
  'F1FeederApp.controllers',
  'F1FeederApp.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
	when("/myView", {templateUrl: "partials/myView.html", controller: "myViewController"}).
	otherwise({redirectTo: '/drivers'});
}]);