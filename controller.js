app.controller('controller', function($scope, $http) {
	$http.get('transactions.json')
		.success(function(data)){
			$scope.results1 = data;
			alert("!");
		});
	$http.get('funds.json')
		.success(function(data){
			$scope.results2 = data;
			alert("!!!!");
		});
});
