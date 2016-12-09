"use strict";

app.controller('ItemListCtrl', function($scope, $routeParams, ItemStorage){

	ItemStorage.getItemList()
		.then( (itemArray) => {
			console.log(itemArray); 
			$scope.items = itemArray;
			$scope.$apply();
	}); 
});

