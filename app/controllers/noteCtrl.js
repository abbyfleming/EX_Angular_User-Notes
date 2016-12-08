"use strict";

app.controller('ItemListCtrl', function($scope, ItemStorage){

	ItemStorage.getItemList()
		.then( (itemArray) => {
			$scope.items = itemArray;
			$scope.$apply();
	}); 
});
