'use strict';
/**
* Error Stack Trace
* 
* The library which trace and write all the exceptions of application
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/

//Load the module
var winston = require('winston'),
	path = require('path');

var debugPath = path.join(config.root, 'public/logs/debug.log'),
    exceptionPath = path.join(config.root, 'public/logs/exceptions.log');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ json: false, 
                                       //level: 'debug',
                                       timestamp: true,
                                       colorize: true 
                                      }),
    new winston.transports.File({ 
                                filename: debugPath,
                                //level: 'info',
                                maxsize: 5242880, //5MB
                                maxFiles: 5,
                                colorize: false, 
                                json: true })
    ],
  exceptionHandlers: [
    new (winston.transports.Console)({ 
                                      json: false, 
                                      //level: 'debug',
                                      timestamp: true,
                                      colorize: true }),
    new winston.transports.File({
                                filename: exceptionPath,  
                                maxsize: 5242880, //5MB
                                maxFiles: 5,
                                colorize: false, 
                                json: true })
  ],
  exitOnError: false
});

module.exports = logger;

           
        