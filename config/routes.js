'use strict';
/**
* Routing File 
* 
* Main routing file which create our routes 
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/

// get an instance of router
global.router = require('express').Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    //console.log(req.method, req.url);
	 
    // continue doing what we were doing and go to the route
    next(); 
});

// get all active modules
router.get('/allModules', function(req, res){	
	Modules._loadAll(function(_aMods){
		res.send(_aMods);
	});
});

// home page route (http://localhost:2020)
router.get('/', function(req, res) {	   
   res.render('index');	
});

// apply the routes to our application
app.use('/', router);