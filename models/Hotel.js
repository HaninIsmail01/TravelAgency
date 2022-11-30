const {Schema, model}= require('mongoose');

const UserSchema= new Schema({

    HotelId: {
        type: 'intger',
        required: true
    },
    
    
    Hoteladdress: {
        type: 'string',
        required: true
    },
    
   
    
    HotelRent: {
        type: 'string',
        required: true
    },
    
    HotelName: {
        type: 'srting',
        required: true
    },

    HotelDescription: {
        type: 'string',
        required: true
    },

    HotelType: {
        type: 'string',
        required: true
    }
    
    
    
    }); 