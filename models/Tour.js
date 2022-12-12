const {Schema, model}= require('mongoose');

const TourSchema= new Schema({

    tourActivities: {
        type: 'string',
        required: true
    },
    
    tourName: {
        type: 'string',
        required: true
    },

    date: {
        type: 'string',
        required: true
    },

    price: {
        type: 'number',
        required: true
    },

    flightNumber: {
        type: 'string',
        required: false
    }
 }); 

 const TourModel = model('tour', TourSchema);

 module.exports = TourModel;