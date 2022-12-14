const {Schema, model}= require('mongoose');

const BookingSchema= new Schema({

    bookingType: {
        type: 'string', //either a hotel or a tour  
        required: true
    },

    hotel: {
        name: {
            type: 'string',
            required: false
        },
    
        price: { //per one room
            type: 'number',
            required: false
        },
        
        services: {
            type: 'string', //Breakfast, pool, etc.
            required: false
        },
    
        roomType: {
            type: 'string', // single or double 
            required: false
        },
    },

    numberOfRooms: { //if a hotel is booked, this will represent the number of rooms booked
        type: 'number', 
        required: false
    },

    tour: {
        tourActivities: {
            type: 'string',
            required: false
        },
        
        tourName: {
            type: 'string',
            required: false
        },
    
        date: {
            type: 'string',
            required: false
        },
    
        price: {
            type: 'number',
            required: false
        },
    
        flightNumber: {
            type: 'string',
            required: false
        }
        
    },

    bookingDate: {
        type: 'string',
        required: true
    }, 

    price: {  //will be updated based on the price of the booked room/s or tour
        type: 'number',
        required: true
    },
    }); 

    const BookingModel = model('booking', BookingSchema);

    module.exports = BookingModel;