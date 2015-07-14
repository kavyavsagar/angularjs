define([], function() {
	var Services = function($http) {
	return {
    	get: function(callback){
    		$http.get('/user/get').then(function(res){		        
		        callback(res);
		    }); 
    	}
        };
	};

	return ['$http', Services];
});