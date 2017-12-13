//var App = angular.module('MyApp',['ui.router','ngMaterial']);

//var App = angular.module('MyApp', ['restangular', 'ui.router', 'ngMaterial']);



           //  Define Multiple Angular Apps In One Page
// var rootApp = angular.module('rootApp', ['MyApp']);
 var rootApp = angular.module('rootApp', ['MyApp','plunker']);

var App = angular.module('MyApp', ['restangular', 'ui.router', 'ngMaterial']);

var app = angular.module('plunker', ['nvd3', 'gridster', 'plunker.services']);
