angular.module("app1")
	.controller("mainCtrl", function ($scope, mainService) {
	
	//Put the data on to $scope
	$scope.bananaInfo = mainService.returnData();
	
		
	})