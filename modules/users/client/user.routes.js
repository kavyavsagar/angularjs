define([], function() {
	"use strict";
	var State = function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('user', {
			url: "/user",			
			views: {
              '@' : {
                templateUrl: 'users/client/views/layouts/default.html',
                controller: 'UserCtrl'
              },
              'utop@user' : { templateUrl: 'users/client/views/partials/nav.html',},            
              'umain@user' : { templateUrl: 'users/client/views/users.html'},
            }
		});

	};
	return ["$stateProvider",'$urlRouterProvider', State];
});