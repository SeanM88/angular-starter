(function(){

/* Controllers */

    var app = angular.module('myApp.controllers', []);

    app.controller('HomeController', ['$scope', function($scope) {
	$scope.saying = "This some dumb ass saying.";

    }]);
    
    app.controller('MyController2', ['$scope', function($scope) {

    }]);

    app.controller('MyController3', ['$scope', function($scope) {

    }]);
  
})();
