define([], function(){
	
	var Controller = function($scope, UserServices){
		$scope.users = [];
		
		UserServices.get(function(res){
	    	if(res.data){
	    		$scope.users = res.data;
	    	}
	    });
	};
	return ["$scope", "UserServices", Controller];
});