"use strict";

var app = angular.module("UserNotesApp", ['ngRoute']); 

// Grab the Auth Factory. 
let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	AuthFactory.isAuthenticated()
		.then((userExists) => {
			if(userExists){
				resolve();
			} else {
				reject();
			}
		});
});


app.config(function($routeProvider){
	$routeProvider
		//view notes
		.when('/notes', {
			templateUrl: 'partials/note.html',
			controller: 'ItemListCtrl',
			
		})
		//create note
		.when('/new', {
			templateUrl: 'partials/note-form.html',
			controller: "NoteNewCtrl",
			resolve: {isAuth}
		})
		//login
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: "LoginCtrl"
		})
		//default - login
		.otherwise('/login'); 
});


app.run( ($location, FBCreds) => {

	let creds = FBCreds;

	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};

	firebase.initializeApp(authConfig);

});