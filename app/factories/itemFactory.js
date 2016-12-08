"use strict";

app.factory("ItemStorage", ($http, FBCreds) => {

	//console.log("URL", FBCreds.URL);

	let getItemList = () => {

		let items = [];

		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/items.json`)
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