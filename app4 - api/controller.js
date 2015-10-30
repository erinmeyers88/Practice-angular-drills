angular.module("apiApp").controller("myCtrl", function ($scope, myService) {
	
 //getBirds returns a promise, not data
	
		//promise eval chain part B
			
			$scope.getCountries = function () {
			myService.getCountries().then(function(response) {
				console.log(response);
				$scope.countries = response.data;
			});
			};
			
			$scope.getCountries();
	
	//go to console, set break point and click on datafrompartA.. to see structure of what you're getting
	
	
})