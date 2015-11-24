angular.module('spi', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/lab/suma',{
		templateUrl: 'suma.html',
		controller: 'ControllerOne'
	})

	$routeProvider
	.when('/lab/resta',{
		templateUrl: 'resta.html',
		controller:'ControllerTwo'
	})

	$routeProvider
	.when('/lab/multiplicacion',{
		templateUrl: 'multiplicacion.html',
		controller:'ControllerThree'
	})

	$routeProvider
	.when('/lab/division',{
		templateUrl: 'division.html',
		controller:'ControllerFour'
	})


	.otherwise({
		redirctTo:'/',
		templateUrl: 'suma.html'
	});

}])

 .controller('ControllerOne', function($scope){
       		$scope.sumaButton=function(){
       			$scope.result=parseInt($scope.a) + parseInt($scope.b);
       		}
       })

 .controller('ControllerTwo', function($scope){
       		$scope.restaButton=function(){
       			$scope.result=parseInt($scope.a) - parseInt($scope.b);
       		}
       })

 .controller('ControllerThree', function($scope){
       		$scope.multiplicaButton=function(){
       			$scope.result=parseInt($scope.a) * parseInt($scope.b);
       		}
       })

.controller('ControllerFour', function($scope){
       		$scope.divideButton=function(){
       			$scope.result=parseInt($scope.a) / parseInt($scope.b);
       		}
       });

