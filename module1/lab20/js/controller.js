angular.module('lab20Controller', ['LeerJson'])


.controller('OddController', function($scope,
		Json){
		$scope.json = Json.list();
		$scope.classTable = "odd";
	})

.controller('EvenController', function($scope,
		Json){
		$scope.json = Json.list();
		$scope.classTable = "even";
	});