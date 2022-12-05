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
        throw new Error(err);
    }
}
