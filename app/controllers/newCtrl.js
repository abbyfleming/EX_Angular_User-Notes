"use strict";

app.controller('NoteNewCtrl', function($scope, $location, AuthFactory, ItemStorage){

	$scope.label = "Enter Note:";
	$scope.btnText = "Save";

	let currentUser = AuthFactory.getUser();

	//default values
	$scope.newNote = {
		text: "",
		uid: currentUser
	};

	$scope.addNewNote = function(){

		console.log("add a new note", $scope.newNote);

		//In the factory, run the function postNewItem with the content from user input
		ItemStorage.postNewItem($scope.newNote)
			.then((response) => {

				//after a new note is added, change the url location
				$location.url("/note");
			});

	};
});