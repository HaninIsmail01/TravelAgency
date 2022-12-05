const {Schema, model}= require('mongoose');

const BookingSchema= new Schema({
    bookingType: {
        type: 'string', //either a hotel or a tour  
        required: true
    },

    hotelID: {
        type: Schema.Types.ObjectId,
        ref: 'hotel',
        required: false
    },

    numberOfRooms: { //if a hotel is booked, this will represent the number of rooms booked
        type: 'number', 
        required: false
    },

    tourID: {
        type: Schema.Types.ObjectId,
        ref: 'tour',
        required: false
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