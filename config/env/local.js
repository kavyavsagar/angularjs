'use strict';
/**
* Local Configurations
* 
* Configuration for localhost
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/
var path = require('path');

module.exports = {
    root: path.join(__dirname, '../../'),
    port:  process.env.PORT || 2020,
    db: {
            name : 'sleekjs',
            port : 27017,
            host : 'localhost', 
            engine: 'mongodb'
        }, 
    host: 'localhost',
    template_engine : 'html',
    layout_theme : 'main',
    environment : 'local',   
    app: {
        name: 'Sleekjs2.0'
    }
};