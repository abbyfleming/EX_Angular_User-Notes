"use strict";

//cannot use fat arrows on constructors

app.controller("LoginCtrl", function($scope, $window, AuthFactory) {

	//default values
	$scope.account = {
		email: "",
		password: ""
	};

	$scope.register = () => {
		AuthFactory.createUser($scope.account)
			.then((userData) => {
				$scope.login();
			});
	};

	$scope.login = () => {
		AuthFactory.loginUser($scope.account)
			.then((user) => {
				//where the page goes after user has logged in
				$window.location.href = "#/new";
			});
	};

});