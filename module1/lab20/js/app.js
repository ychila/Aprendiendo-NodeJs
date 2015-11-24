angular.module('lab20',['ngRoute','lab20Controller','LeerJson'])
	.config(function($routeProvider){
		$routeProvider

		.when('/listRed', {
		templateUrl: 'views/list.html',
		controller: 'OddController'
	})
		.when('/listGreen', {
			templateUrl: 'views/list.html',
			controller: 'EvenController'
		})


	});