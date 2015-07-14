// setup mongoose and db variable 
var mongo = dbconnect.mongoose;
var Schema   = dbconnect.Schema; 
/*
 * 
 * User schema
 */
var UserSchema = new Schema({
    email: {
        type: String,
        default: '',
        trim: true
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    password: {
        type: String,
        default: '',
        trim: true
    },        
    created: {
        type: Date,
        default: Date.now
    }
});

/*
 * define model of user schema
 */
var User = mongo.model('users', UserSchema);


var Authentication = { 

    listUser : function(res){

        User.find({}, function(err, users) {       
            if(err) {errorStack.info(err); res(false);}

            res(users);
        }); 
    }
};
module.exports = Authentication;