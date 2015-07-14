'use strict';
/**
* Define Common Functions
* 
* Define all the common functions for angular applications 
*
* @application : Sleekjs
* @version : $Id:$v.2.0.0
* @date : 07-07-2015
* @author : Kavya Sagar @ Cubet Techno Labs
*/
var _loadedModules = [];

var createWidgets = function (_cbz){

	var html = [];
	for(var i=0; i< _loadedModules.length; i++){	 
		
		$.getJSON(_loadedModules[i]+ "/client/widget.json", function(json) {		 		
			/* loop through array */			
	        $.each(json, function(index, a){ 
	        	/*includes*/	        	
	        	if(index == 'includes' && a.length >0){	  
	        		$.each(a, function(ind, adata){
	        		
	        			html.push(adata);
	        		});
	        	}
	        });	
	      	
		});
		if(i == (_loadedModules.length-1))_cbz(html);
	}
	
};
var _fnWidgets = function(_cbW){
	//var arWidgets = [];
/*	createWidgets(function(aData){	
		var arWidgets = [];
		console.log(aData);
	console.log(aData.length);

		for(var j=0; j< 2; j++){	
			console.log(j);
			console.log(aData[j])
			$.each(aData[i], function(index, item){		
				console.log(3);
				arWidgets = arWidgets.concat(item);		
			});
			_cbW(arWidgets);
		}
	});*/
};
var _fnLoadWidgets = function(mod, cb){

	$.getJSON(mod+ "/client/widget.json", function(json) {
 		var html = {};
		/* loop through array */
        $.each(json, function(index, a){ 
        	/*includes*/	        	
        	if(index == 'includes' && a.length >0){	        		
        		html.push(a); 
        	}
        });	

       	cb(html);      
	});
};
var loadModules = function(cb){
	$.ajax({
	  	url: "/allModules",	  
	}).done(function(modName) {
	  	//
	  	cb(modName);	  	
	});
};
var requireModules = function(_cb){
	var modFiles = [], modName = [], modList={};

	loadModules(function(data){	
		// set modules global	
		_loadedModules = data;

	  	for(var i=0; i< data.length; i++){	 	  				
	  		modFiles.push(data[i]+ '/module');
	  		modName.push(data[i]+ 'Module');	  		
	  	}

		modName = modName.join(",");
	  	modList.names = modName;

	  	modList.files = modFiles;

	  	_cb(modList);
	});
}
var createhead = function(title, keys, desc) { 
	document.title = title;

   	var m = document.createElement('meta'); 
	m.name = 'description'; 
	m.content = desc; 
	document.getElementsByTagName('head')[0].appendChild(m);

	var mk = document.createElement('meta'); 
	mk.name = 'keywords'; 
	mk.content = keys; 
	document.getElementsByTagName('head')[0].appendChild(mk);
}