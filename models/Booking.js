const {Schema, model}= require('mongoose');

const BookingSchema= new Schema({
    BookingType: {
        type: 'string', //either a hotel or a tour  
        required: true
    },

    HotelID: {
        type: Schema.Types.ObjectId,
        ref: 'hotel',
        required: false
    },

    TourID: {
        type: Schema.Types.ObjectId,
        ref: 'tour',
        required: false
    },

    BookingDate: {
        type: 'string',
        required: true
    }, 

    Price: {
        type: number,
        required: true
    },
    }); 

    const BookingModel = model('booking', BookingSchema);

    module.exports = BookingModel;