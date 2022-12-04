const {Schema, model}= require('mongoose');

const ReviewSchema = new Schema({

    ReviewDescription: {
        type: 'string',
        required: true
    },
    
    ReviewRating: {
        type: 'number',
        required: true
    },

    ReviewDate: {
        type: 'date',
        required: true
    }
    
});

const ReviewModel = model('Review', ReviewSchema);

module.exports = ReviewModel;