var app = angular.module('search', []);

app.controller('controller', ['$scope', '$http', function($scope, $http) {
	alert("here");
	$http.get('transactions.json')
		.success(function(data){
			$scope.results1 = data;
			alert("!");
		});
	$http.get('funds.json')
		.success(function(data){
			$scope.results2 = data;
			alert("!!!!");
		});
}]);
