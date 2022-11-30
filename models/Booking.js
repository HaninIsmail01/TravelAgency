const {Schema, model}= require('mongoose');

const UserSchema= new Schema({

    BookingType: {
        type: 'string',
        required: true
    },
    
    BookingID: {
        type: 'intger',
        required: true
    },
    
    BookingDescription: {
        type: 'string',
        required: true
    },
    
    BookingTitle: {
        type: 'srting',
        required: true
    },

    BookingHotel_id: {
        type: 'intger',
        required: true
    },

    BookingDate: {
        type: 'string',
        required: true
    }
    
    
    
    }); 