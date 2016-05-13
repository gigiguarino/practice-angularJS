app.controller('controller', ['$scope', 'funds', 'transactions' function($scope, funds, transactions) {
  transactions.success(function(data) {
    $scope.results1 = data.objects;
  });
  funds.success(function(data){
	$scope.results2 = data.objects;
  });
}]);
