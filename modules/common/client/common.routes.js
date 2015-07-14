define([], function() {
	"use strict";
	var State = function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('admin', {
			url: "/",
			views: {
              '@' : {
                templateUrl: 'common/client/views/layouts/grey.html',
                controller: 'CommonCtrl'
              },
              'top@admin' : { templateUrl: 'common/client/views/partials/nav.html',},            
              'main@admin' : { templateUrl: 'common/client/views/home.html'},
            }
		});

		$urlRouterProvider.otherwise('/');
	};
	return ["$stateProvider",'$urlRouterProvider', State];
});