
var UserModel = UserModule.Model();

var authController = { 
	
	getUsers : function(req, res){
	
		UserModel.listUser(function(result){			
			if(result)res.send(result);
		});
			
	},
	setSchema : function(x, cb){
		res(setting);
		console.log('Hello Iam a getter')
	}
	
};
module.exports = authController;
