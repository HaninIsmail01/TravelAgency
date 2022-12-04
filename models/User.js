const {Schema, model}= require('mongoose');

const UserSchema= new Schema({

userName: {
    type: 'string',
    required: true
},

gender: {
    type: 'string',
    required: true
},

telephone: {
    type: 'intger',
    required: true
},

address: {
    type: 'string',
    required: true

},

password: {
    type:'string',
    required:true
}

}); 

const UserModel = model('user', UserSchema);

module.exports = UserModel;