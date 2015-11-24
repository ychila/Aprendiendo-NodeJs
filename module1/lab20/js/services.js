angular.module('LeerJson',[])
	.service('Json', function($http){
		var _url = 'data.json';
		var data;

		$http.get(_url).success(function(response){
			data = response;
		});

		this.list= function(){
			return data;
		}
	});