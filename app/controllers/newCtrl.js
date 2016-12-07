"use strict";

app.controller('NoteNewCtrl', function($scope, $location, AuthFactory, ItemStoage){

	$scope.label = "Enter Note:";
	$scope.btnText = "Save";

	//default values
	$scope.newNote = {
		text: "",
		uid: ""
	};

	$scope.addNewNote = function(){
		console.log("add a new note", $scope.newNote);
		ItemStoage.postNewItem($scope.newNote)
			.then((response) => {
				$location.url("/new");
			});

	};
});