const {Schema, model}= require('mongoose');

const TourSchema= new Schema({

    TourDescription: {
        type: 'string',
        required: true
    },
    
    TourName: {
        type: 'string',
        required: true
    },

    TourDate: {
        type: 'date',
        required: true
    },

    TourPrice: {
        type: 'number',
        required: true
    },

    TourFlight: {
        type: 'string',
        required: true
    }
 }); 

 const TourModel = model('Tour', TourSchema);

 module.exports = TourModel;