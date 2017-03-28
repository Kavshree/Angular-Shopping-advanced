var myApp=angular.module('shoppingApp',['ngRoute','listApp']);

myApp.config(function($routeProvider) {
	 $routeProvider
	 .when('/', {
        templateUrl: 'list.html',
        controller: 'listCtrl'
    })
	 .when('/details/:itemId',{
	 	templateUrl: 'details.html',
	 	controller: 'detailsCtrl'
	 })
	 .when('/checkout',{
	 	templateUrl: 'checkout.html'
	 })
	.otherwise({
        templateUrl: 'list.html',
        controller: 'listCtrl'
    });
})