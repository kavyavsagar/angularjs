'use strict';
/**
* General Functions Library 
* 
* The function which are commonly used in the application
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/

var fs = require('fs');

var general = {
	// is folder empty or not
	isEmpty : function (searchPath, cb) {
	  fs.stat(searchPath, function (err, stat) {
	    if (err) {
	      return cb(true);
	    }
	    if (stat.isDirectory()) {
	      fs.readdir(searchPath, function (err, items) {
	        if (err) {
	          return cb(true);
	        }
	        cb(!items || !items.length);
	      });
	    } else {
	      fs.readFile(searchPath, function (err, data) {
	        if (err) {
	          cb(true);
	        }
	        cb(!data || !data.length)
	      });
	    }
	  });
	},
	
};

module.exports = general;