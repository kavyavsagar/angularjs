'use strict';
/**
* DB Config
* 
* Database configuration with mongoose
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/
global.dbconnect = {};

var mongoose = require( 'mongoose' );
var dbVar = config.db.engine+'://'+config.db.host+':'+config.db.port+'/' + config.db.name;  

mongoose.connect(dbVar); 

var Schema   = mongoose.Schema; 

global.dbconnect = {
            Schema: Schema,
            mongoose: mongoose           
        };