define(["common/client/common.routes",
	"common/client/controller/common.controller",
	"common/client/directive/common.directive",
	], function(Routes, CommonCtrl, whois) {
	"use strict";
	var MODULE_NAME = "Common";
	angular.module(MODULE_NAME, ["ui.router"])		
		.controller("CommonCtrl", CommonCtrl)
		.directive("whois", whois)
		.config(Routes);
	return MODULE_NAME;
});