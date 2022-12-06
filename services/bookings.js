const BookingModel = require('../models/Booking');
var ObjectID = require('mongodb').ObjectId;

module.exports.retrieveBooking = async () => {
    try{
        const bookings = await BookingModel.find();
        return bookings;
    }
    catch(err){
        throw new Error(`Couldn't find bookings`);
    }
}

module.exports.retrieveBookingByID = async (bookingId) => {
    try{
        const booking = await BookingModel.find({_id: ObjectID(bookingId)});
        return booking;
    }
    catch(err){
        throw new Error(`Couldn't find booking`);
    }
}

module.exports.makeBooking = async (bookinginfo) => {
    try{
        const booking = new BookingModel({
            bookingType: bookinginfo.bookingType,

            hotel :{
                name: bookinginfo.name,
                price: bookinginfo.price,
                services: bookinginfo.services,
                roomType: bookinginfo.roomType
            },
            numberOfRooms: bookinginfo.numberOfRooms,

            tour :{
                tourActivities: bookinginfo.tourActivities,
                tourName: bookinginfo.tourName,
                date: bookinginfo.date,
                price: bookinginfo.price,
                flightNumber: bookinginfo.flightNumber
            },
            bookingDate: bookinginfo.bookingDate,
            price: bookinginfo.price

        });
        const createdBooking = await booking.save();
        return createdBooking;
    }
    catch(err){
        throw new Error(`Couldn't make booking`);
    }
}

module.exports.cancelBooking = async (bookingId) => {
    try{
        await BookingModel.deleteOne({_id: ObjectID(bookingId)});
    }
    catch(err){
        throw new Error(`Couldn't cancel booking`);
    }
}

module.exports.updateBooking = async (bookingId, newData) => {
    try{
        const booking = await BookingModel.find({_id: ObjectID(bookingId)});
        if(newData.bookingType){
            booking
        }
    }
    catch(err){
        throw new Error(`Couldn't update booking`);
    }
}

