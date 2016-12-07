"use strict";
console.log("app.js linked");

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
			// Resolve: safety feature so people can't just go to the URL. 
			//resolve: {isAuth}
		})
		.when('/new', {
			templateUrl: 'partials/note-form.html',
			controller: "NoteNewCtrl"
		})
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: "LoginCtrl"
		})
		.otherwise('/note'); 
});


app.run( ($location, FBCreds) => {

	let creds = FBCreds;

	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};

	firebase.initializeApp(authConfig);

});