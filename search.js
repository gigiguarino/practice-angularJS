$('#search-form').submit(function(){
	if ($('#funds-check').checked){
		$scope.show-funds = true;
	} else {
		$scope.show-funds = false;
	}
	if ($('#transactions-check').checked){
		$scope.show-transactions = true;
	} else {
		$scope.show-transactions = false;
	}
});