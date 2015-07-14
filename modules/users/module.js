define(["users/client/user.routes",
	"users/client/controller/user.controller",
	"users/client/services/user.services",
	], function(Routes, UserCtrl, UserServices) {
	"use strict";

	var MODULE_NAME = "User";

	angular.module(MODULE_NAME, ["ui.router"])		
		.service( "UserServices", UserServices)
	    .controller("UserCtrl", UserCtrl)
		.config(Routes);

	return MODULE_NAME;
});