const {Schema, model}= require('mongoose');

const UserSchema= new Schema({

    
    
    ReviewID: {
        type: 'intger',
        required: true
    },
    
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
