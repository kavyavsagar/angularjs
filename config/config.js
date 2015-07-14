'use strict';
/**
* Application Config
* 
* Load enviornment configurations
* Set the node environment variable if not set before
* specific configuration
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/
global.config = {};

process.env.NODE_ENV = process.env.NODE_ENV || 'local';
var local_env = require('./env/'+ process.env.NODE_ENV);

// Load generally used configs to the entire site 
global.config = {
	root: local_env.root,
	port:  local_env.port,
	host: local_env.host,
	db: local_env.db,
    template_engine : local_env.template_engine,
    layout_theme:  local_env.layout_theme,
    environment : local_env.environment
};

/*
 * DB configuration files included and declare db variables globally
*/
require('./db.js');