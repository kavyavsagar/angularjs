'use strict';
/**
* Modules Integration Library 
* 
* Activate Plug and Play Modules
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/
var path    = require('path'),   
    fs      = require('fs'),
    hbs     = require('express-handlebars'),
    async   = require('async');


function Modules() {

}

// Constructor
var Modules = function () {
      
};

// Load all module configurations
Modules.prototype.get = function () {
    var configFiles = [];
    var modDir = fs.readdirSync(path.join(config.root,'modules'));
 
    async.eachSeries(modDir, function (mods, _pcbk) {

        var statsDir = fs.statSync(path.join(config.root,'modules',mods, 'server')),
            statsFile = fs.statSync(path.join(config.root,'modules',mods, 'server/module.config.js'));
       
        if(statsDir.isDirectory() && statsFile.isFile()){ 
            configFiles.push(path.join(config.root,'modules',mods, 'server/module.config.js'));
        }else{         
            errorStack.info('NO MODULE FILE EXISTS');
        }

        _pcbk();
    }, function(){
       
        configFiles.forEach(function(file) { 
           return require(file);    
        });
      
    });
               
}
// Load all modules
Modules.prototype._loadAll = function(_cb) {
    var modDir = fs.readdirSync(path.join(config.root,'modules')),
        _arMod = [];

    async.eachSeries(modDir, function (mods, _pcbk) {
        _arMod.push(mods);      
        _pcbk();
    }, function(){

        _cb(_arMod);
    });
}

// set layout
Modules.prototype.layouts = function(layout) {

    var theme = layout? layout: config.layout_theme;
    console.log(theme);
    var layoutsDir = path.join(config.root, 'views/layouts'),
        partialsDir = path.join(config.root, 'views/partials'),
        defaultLayout = path.join(config.root, 'views/layouts', theme);


    var exphbs = hbs.create({
                layoutsDir:  layoutsDir,
                partialsDir: partialsDir,
                defaultLayout: defaultLayout,
                extname: config.template_engine               
            });
    app.engine(config.template_engine, exphbs.engine);           
    app.set('view engine', config.template_engine);
}

module.exports = new Modules();