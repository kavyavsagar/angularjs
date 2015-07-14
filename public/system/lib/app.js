'use strict';
/**
* Define angular application
* 
* Dependency Injection and angular app has defined with bootstrap manually.
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/
require([
  "angular",
  "angularUiRouter",  
  "jquery",
  "main"
], function() {
	createhead('SLEEKJS', 'ANGULARJS', 'This is second generation');
	requireModules(function(mods){
		 initApplication(mods); 
	});
  
});

var initApplication = function(modules) {

	var _modFiles = modules.files;
	//var _modNames = modules.names;
	
	require(_modFiles, function(commonModule, usersModule) {
	
	    var appName = "sleekApp";
	    var app = angular.module(
	      appName, [		
	      commonModule, usersModule
	      ]
	    );
	    var $html = angular.element(document.getElementsByTagName('html')[0]);	   
	    angular.element().ready(function() {
	    	angular.bootstrap($html[0] , [appName]);
	    });
    
  	});


};