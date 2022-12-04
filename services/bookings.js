const BookingModel = require('../models/Booking');

module.exports.retrieveBooking = async () => {
    try{
        const bookings = await BookingModel.find();
        return bookings;
    }
    catch(err){
        throw new Error(`Couldn't find bookings`);
    }
}

module.exports.makeBooking = async (bookinginfo) => {
    try{
        const booking = new BookingModel({
            BookingDescription: bookinginfo.BookingDescription,
            BookingTitle: bookinginfo.BookingTitle,
            BookingDate: bookinginfo.BookingDate
        });
        const createdBooking = await booking.save();
        return createdBooking;
    }
    catch(err){
        throw new Error(`Couldn't make bookings`);
    }
}
