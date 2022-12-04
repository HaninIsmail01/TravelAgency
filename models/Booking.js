const {Schema, model}= require('mongoose');

const BookingSchema= new Schema({

    BookingDescription: {
        type: 'string',
        required: true
    },
    
    BookingTitle: {
        type: 'string',
        required: true
    },

    BookingDate: {
        type: 'string',
        required: true
    }
    }); 

    const BookingModel = model('booking', BookingSchema);

    module.exports = BookingModel;