angular.module("app1")
	.service("mainService", function () {

	//Create data (the controller can't seet this, protects the data)
	var anArray = [
		"banana 1",
		"banana 2",
		"banana 3",
		"chimpanzee"
		
	]

	//Return the data (the controller will be able to see it because of the .this)
	this.returnData = function () {
		return anArray;
	}
		
	})
