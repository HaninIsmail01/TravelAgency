const {Schema, model}= require('mongoose');

const HotelSchema = new Schema({   
    name: {
        type: 'string',
        required: true
    },

    price: { //per one room
        type: 'number',
        required: true
    },
    
    services: {
        type: 'string', //Breakfast, pool, etc.
        required: true
    },

    roomType: {
        type: 'string', // single or double 
        required: true
    }

    }); 
    
    const HotelModel = model('hotel', HotelSchema);

    module.exports = HotelModel;