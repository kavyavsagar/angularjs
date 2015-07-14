/*
* Routing declaration
*
*/
var UserCtrl = UserModule.Controller();

router.get('/user/get', UserCtrl.getUsers);
router.get('/user/iam', UserCtrl.setter);
