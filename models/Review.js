const {Schema, model}= require('mongoose');

const UserSchema= new Schema({

    ReviewDescription: {
        type: 'string',
        required: true
    },
    
    ReviewRating: {
        type: 'intger',
        required: true
    },

    ReviewDate: {
        type: 'date',
        required: true
    }
    
});
