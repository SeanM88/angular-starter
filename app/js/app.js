(function(){

    // Declare app level module which depends on filters, and services
    var app = angular.module('myApp', [
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers',
	'ui.bootstrap'
    ]);
    
    app.config(['$routeProvider', function($routeProvider) {
      
	$routeProvider
	    .when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	    })
	    .when('/view2', {
		templateUrl: 'partials/partial2.html',
		controller: 'MyController2'
	    })
	    .when('/view3', {
		templateUrl: 'partials/partial2.html',
		controller: 'MyController3'
	    })
	    .otherwise({ redirectTo: '/' });
      
    }]);

})();
