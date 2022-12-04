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
            bookingType: bookinginfo.bookingType,
            hotelID: new obejectId(bookinginfo.hotelID),
            numberOfRooms: bookinginfo.numberOfRooms,
            tourID: new obejectId(bookinginfo.tourID),
            BookingDate: bookinginfo.BookingDate,
            price: bookinginfo.price
        });
        const createdBooking = await booking.save();
        return createdBooking;
    }
    catch(err){
        throw new Error(`Couldn't make bookings`);
    }
}
