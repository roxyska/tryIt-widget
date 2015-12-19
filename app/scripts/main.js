'use strict';

var angular = require('angular'); // That's right! We can just require angular as if we were in node

var WelcomeCtrl = require('./controllers/WelcomeCtrl'); // We can use our WelcomeCtrl.js as a module. Rainbows.
var DateTimeCtrl = require('./controllers/DateTimeCtrl');
var AddressCtrl = require('./controllers/AddressCtrl');

var Parse = require('parse');

var app = angular.module('myApp', [require('angular-route')]);

Parse.initialize('hVIQAernZxBNmTX3ci8rAhXLY6XfQuULqRMU2gGq', 'ETZOe80H2yTCqEa671i55KtYtSUUiWJguXAIxDau');

// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });


app.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);
app.controller('DateTimeCtrl', ['$scope', DateTimeCtrl]);
app.controller('AddressCtrl', ['$scope', AddressCtrl]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	  when('/dateTime', {
	    templateUrl: 'views/date-time.html',
	    controller: 'DateTimeCtrl'
	  }).
	  when('/address/', {
	    templateUrl: 'views/address.html',
	    controller: 'AddressCtrl'
	  }).
	  otherwise({
	    redirectTo: '/dateTime'
	  });
}]);