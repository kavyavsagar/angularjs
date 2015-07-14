
var UserCtrl = new Sleekjs('users').Controller();

var helloController = { 
	
	setCommon : function(req, res){
		var x = UserCtrl.setter();
		console.log(x)
		console.log('Hello ! Commonly used module from user.');
		res.send('OK');
	}
	
};

module.exports = helloController;