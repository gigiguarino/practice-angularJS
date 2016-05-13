$('#search-form').submit(function(){
	if ($('#funds-check').checked){
		$scope.show-funds = true;
	}
	if ($('#transactions-check').checked){
		$scope.show-transactions = true;
	}
});