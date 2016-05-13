var app = angular.module('search', []);

app.controller('controller', ['$scope', '$http', function($scope, $http) {
	$http.get('transactions.json')
		.success(function(data){
			$scope.results1 = data;
		});
	$http.get('funds.json')
		.success(function(data){
			$scope.results2 = data;
		});
}]);
