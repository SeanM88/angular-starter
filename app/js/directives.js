(function(){
  
/* Directives */

    var app = angular.module('myApp.directives', []);
    
    app.directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
	  elm.text(version);
	};
    }]);
    
    app.directive('myNavigation', function() {
	return {
	    restrict: 'E',
	    templateUrl: 'partials/navigation.html',
	    controller: function() {
		this.navCollapsed = true;
                this.active = 1;
                this.makeActive = function(setActive) {
                    this.active = setActive;
                };
                this.isActive = function(checkActive) {
                    return this.active === checkActive;
                };
	    },
	    controllerAs: 'nav'
	}
    });


})();