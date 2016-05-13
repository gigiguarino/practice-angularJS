app.factory('funds', ['$http', function($http) { 
  return $http.get('funds.json') 
	.success(function(data) { 
	  return data; 
	}) 
	.error(function(err) { 
	  return err; 
	}); 
}]);
