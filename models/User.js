const {Schema, model}= require('mongoose');

const UserSchema= new Schema({

UserName: {
    type: 'string',
    required: true
},

UserGender: {
    type: 'string',
    required: true
},

UserTelephone: {
    type: 'intger',
    required: true
},

UserAddress: {
    type: 'string',
    required: true

},

UserPassword: {
    type:'string',
    required:true
}

}); 

const UserModel = model('user', UserSchema);

module.exports = UserModel;