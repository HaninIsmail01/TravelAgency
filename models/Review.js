const {Schema, model}= require('mongoose');

const ReviewSchema = new Schema({

    reviewDescription: {
        type: 'string',
        required: true
    },
    
    reviewRating: {
        type: 'number',
        required: true
    },

    reviewDate: {
        type: 'string',
        required: false
    }
    
});

const ReviewModel = model('review', ReviewSchema);

module.exports = ReviewModel;