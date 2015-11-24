angular.module('spi', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/hello',{
		templateUrl: 'otherwise.html'
	})
	.when ('/message/one',{
		templateUrl:'message-one.html'
	})
	.otherwise({
		redirctTo:'/',
		templateUrl: 'otherwise.html'
	});
}]);