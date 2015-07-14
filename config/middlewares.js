'use strict';
/**
* Middlewares
* 
* Module dependencies and server middleware configurations 
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/

var express = require('express'),    
    hbs = require('express-handlebars'),
    compression = require('compression'),
    path = require('path'),
    fs = require('fs'),   
    bodyParser  = require('body-parser'),
    methodOverride = require('method-override');

/*
 * Define apps and its use
 */
global.app = express();

// set all environments
app.set('port', config.port);
app.set('host', config.host);

// Should be placed before express.static
// To ensure that all assets and data are compressed (utilize bandwidth)
app.use(compression({
	// Levels are specified in a range of 0 to 9, where-as 0 is
	// no compression and 9 is best compression, but slowest
	level: 9
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 

// parse application/json
app.use(bodyParser.json())    

app.use(methodOverride());  

// We keep the same public path so we can make use of the bootstrap assets
app.use(express.static(path.join(config.root, 'public')));

app.use(express.static(path.join(config.root, 'modules')) );

// Register `hbs` as our view engine using its bound `engine()` function.
// Set html in app.engine and app.set so express knows what extension to look for.
Modules.layouts();


// Only use logger for development environment
var env = config.environment;

if (env === 'development') { 
  // development only
    app.use(express.errorHandler());
}
if (env === 'production') {
    // production only    
}