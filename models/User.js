const {Schema, model, SchemaType}= require('mongoose');

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
    type: 'number',
    required: true
},

address: {
    type: 'string',
    required: true

},

password: {
    type:'string',
    required:true
},

role: {  //either admin or user
    type:'string',
    required: true
},

bookingID: {
    type: Schema.Types.ObjectId,
    ref: 'booking',
    required: false

}, 

reviewID: {
    type: Schema.Types.ObjectId,
    ref: 'review',
    required: false
}

}); 

const UserModel = model('user', UserSchema);

module.exports = UserModel;