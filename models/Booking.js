const {Schema, model}= require('mongoose');

const BookingSchema= new Schema({
    bookingType: {
        type: 'string', //either a hotel or a tour  
        required: true
    },

    hotel: {
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
        },
    },

    numberOfRooms: { //if a hotel is booked, this will represent the number of rooms booked
        type: 'number', 
        required: false
    },

    tour: {
        tourActivities: {
            type: 'string',
            required: true
        },
        
        tourName: {
            type: 'string',
            required: true
        },
    
        date: {
            type: 'date',
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