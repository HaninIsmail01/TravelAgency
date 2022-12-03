const {Schema, model}= require('mongoose');

const HotelSchema = new Schema({

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
    
    }); 
    
    const HotelModel = model('Hotel', HotelSchema);

    module.exports = HotelModel;