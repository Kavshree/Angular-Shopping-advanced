	var listApp=angular.module('listApp',['ngStorage']);

	listApp.factory('productJSON', function($http){
		return {
			get: function(){
				return $http.get('products.json'); 
			}
		};
	})

	listApp.controller('listCtrl', ['$scope','$http','productJSON','$localStorage','$window', function(scope,http,productJSON,localStorage,$window){
		scope.cart=[];
		productJSON.get().then(function(response){
			scope.products=response.data.products;
		});	

		scope.addToCart=function(product){
			var found=false;
			scope.cart_qty=0;
			angular.forEach(function(item){
				if(item.id === product.id){
					item.quantity++;
					found=true;
				}
			});
			if (!found) {
				scope.cart.push(angular.extend({quantity: 1}, product));
				scope.cart_qty=scope.cart.length;
				localStorage.cart_qty=scope.cart_qty;
			}
		};

		scope.goToProduct=function(product){

		};
		scope.getCartPrice = function () {
			var total = 0;
			scope.cart.forEach(function (product) {
				total += product.price * product.quantity;
			});
			return total;
		};
	}]);

	listApp.controller('detailsCtrl', ['$scope','$http','$routeParams', function(scope,http,routeParams){
		scope.sayHi='hi';
		http.get('products.json').success(function(response){
			scope.products=response.products;
			scope.whichItem=routeParams.itemId;
		})
	}])
