'use strict';
/**
* Core File too manage all
* 
* The library which load all controllers, models, routes of a module
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/
var path    = require('path'),   
    fs      = require('fs'),
    async   = require('async'),
    requieall  = require('require-all'),
    _          = require('underscore');
 
//ERROR STACK
global.errorStack = require(path.join(config.root, 'public/system/error.lib'));

// Load entire module config by default
global.Modules = require(path.join(config.root, 'public/system/module.lib'));
Modules.get();    

// Globalize General Functions
global._gen   = require('./general.lib'); 

function Sleekjs() {
 
}

// Constructor
var Sleekjs = function (name) {    
    
    // always initialize all instance properties
    this.name = name;
   
    if(name){
        this.Router();              
    }
    
};

// class methods for Models
Sleekjs.prototype.Model = function () {
    try {       
        var modelPath  = path.join(config.root, 'modules/'+ this.name, 'server/model');        
        //return require(path.join(modelPath, this.name+'.model'));
        var models, _arFn = {};             
        models = requieall({
              dirname     :  modelPath,
              filter      :  /(.+model)\.js$/,
              excludeDirs :  /^\.(git|svn)$/,
              resolve     : function (Model) {   
                // npm install underscore to install
                _arFn = _.extend(_arFn, Model);
              }
        });
        
        return _arFn;

     } catch (err) {
        errorStack.info(err);
    } 
}

// class methods for Controllers
Sleekjs.prototype.Controller = function () {  
    
    try {  
        var controllers, _arFn = {};     
        var cntrlPath  = path.join(config.root, 'modules/'+ this.name, 'server/controller');                      
        controllers = requieall({
              dirname     :  cntrlPath,
              filter      :  /(.+controller)\.js$/,
              excludeDirs :  /^\.(git|svn)$/,
              resolve     : function (Controller) {   
                // npm install underscore to install
                _arFn = _.extend(_arFn, Controller);
              }
        });

        return _arFn;
        // return require(path.join(cntrlPath, this.name+'.controller'));       

    } catch (err) {       
        errorStack.info(err);
    }
}

// class methods for Routes
Sleekjs.prototype.Router = function () { 
    try {         
        var realPath  = path.join(config.root, 'modules/'+ this.name, 'server/', this.name+'.route.js');

        fs.lstat(realPath, function(err, stats) {            
            if (!err && stats.isFile()) {
                // Yes it is
               return require(realPath);
            }
        });
       
    } catch (err) {
        errorStack.info(err);
    }
}

// export the class
module.exports = Sleekjs;

