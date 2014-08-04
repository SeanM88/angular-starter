(function(){

/* Services */

    // Demonstrate how to register services
    // In this case it is a simple value service.

    var app = angular.module('myApp.services', []);
  
    app.value('version', '0.1');

})();