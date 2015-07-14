'use strict';
/**
* Client Side Configurations
* 
* Include libraries which are loaded to our application 
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/
require.config({
	paths: {	
		jquery: 'bower_components/jquery/dist/jquery',
		angular: 'bower_components/angular/angular',
		angularUiRouter: 'bower_components/angular-ui-router/release/angular-ui-router',		
		angularMocks: 'bower_components/angular-mocks/angular-mocks',
		text: 'bower_components/requirejs-text/text',		
		main: 'system/lib/main'
	},
	shim: {
		jquery: { exports: '$'},
		angular: { exports: 'angular', },	
		angularUiRouter: { exports: 'angularUiRouter', deps: ['angular'] },		
        angularMocks: { exports: 'angular.mock', deps: ['angular'] }				
	},	
    deps: [
        //kick start application... see app.js
        'system/lib/app'
    ],
	callback:  null,
	baseUrl:  '/',
});
