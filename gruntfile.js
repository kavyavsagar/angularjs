/**
* Gruntfile.js
* 
* Application execution file
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/
module.exports = function(grunt) {
  
  grunt.option('staging', true);
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON("package.json"), 

    // configure nodemon
    nodemon: {
      dev: {
        script: 'config/sleek.js'
      }
    }

  });
  // load nodemon
  grunt.loadNpmTasks('grunt-nodemon');

  // register the nodemon task when we run grunt
  grunt.registerTask('default', ['nodemon']);  

};