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
		.when('/note', {
			templateUrl: 'partials/note.html' //,
			//controller: 'ItemListCtrl',
			
		})
		.when('/new', {
			templateUrl: 'partials/note-form.html',
			controller: "NoteNewCtrl",
			resolve: {isAuth}
		})
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: "LoginCtrl"
		})
		.otherwise('/'); 
});


app.run( ($location, FBCreds) => {

	let creds = FBCreds;

	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};

	firebase.initializeApp(authConfig);

});