const {Schema, model}= require('mongoose');

const UserSchema= new Schema({

UserName: {
    type: 'string',
    required: true
},

UserID: {
    type: 'intger',
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

}

}); 