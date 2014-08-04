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
                this.tab = 1;
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                };
	    },
	    controllerAs: 'navLink'
	}
    });


})();