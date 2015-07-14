define([], function() {
	var Directive = function() {
	 	return {
  			restrict: "E",
  			transclude: true,
  			templateUrl: 'common/client/views/common.html'
	    };
	};
	return [Directive];
});
