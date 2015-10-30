angular.module("apiApp").service("myService", function ($http) {
	
	
	var baseUrl = "https://restcountries.eu/rest/v1/all";
	
	this.getCountries = function () {
		return $http({
			method: "GET",
			url: baseUrl
		})
		
		//This is Part A in the chain
		
	};
	
})