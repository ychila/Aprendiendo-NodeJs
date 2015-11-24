angular.module('spi', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/lab/one',{
		templateUrl: 'lab1.html'
	})
	.when ('/lab/two',{
		templateUrl:'lab2.html'
	})

	.when ('/lab/three',{
		templateUrl:'lab3.html',
		controller: 'studentController'
	})


	.otherwise({
		redirctTo:'/',
		templateUrl: 'lab2.html'
	});

}])

.controller('studentController', function($scope, $http){
	var _url = 'data.json';

	$http.get(_url).success(function(response){
		console.log(response);

		$scope.students = response;
	});
});