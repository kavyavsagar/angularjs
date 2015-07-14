'use strict';
/**
* Main Server File 
* 
* Main server file which create server and include all configurations, middlewares, routes etc.
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/

var path = require('path'),
    http = require('http');
/*
 * System configuration files included and declare system variables globally
*/
require('./config.js');

// register Modules using core library
global.Sleekjs = require(path.join(config.root, 'public/system/core.lib'));  

// set middlewares and dependencies
require('./middlewares.js');

// Setup all the routing 
require('./routes.js');

/**
 * Start Server
*/
http.createServer(app).listen(config.port, function () {
  console.log('Express server listening on port http://' + config.host +":"+ config.port);
});