"use strict";

app.factory("ItemStorage", ($http, AuthFactory, FBCreds) => {

	let getItemList = () => {

		let currentUser = AuthFactory.getUser();
		let items = [];

		console.log(currentUser);

		return new Promise((resolve, reject) => {
			console.log(currentUser);

			$http.get(`${FBCreds.URL}/items.json?orderBy="uid"&equalTo="${currentUser}"`)
			.success((itemObject) => {
				let itemCollection = itemObject;
				Object.keys(itemCollection).forEach((key) =>{
					itemCollection[key].id = key;
					items.push(itemCollection[key]);
				});
				resolve(items);
			})
			.error((error) => {
				reject(error);
			});
		});
	};


	let postNewItem = (newTask) => {
		return new Promise((resolve, reject) => {
			$http.post(`${FBCreds.URL}/items.json`, angular.toJson(newTask))
			.success((obj) => {
				resolve(obj);
				console.log("posted new item");
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	return {getItemList, postNewItem};

}); 