const bookingsService = require('../services/bookings');

module.exports.getBookings = async (req,res) => {
    try{
        const bookings = await bookingsService.retrieveBooking();
        res.send({bookings});
    }
    catch(err){
        res.status(500);
        res.send({
            error: err
        });
    }
};

module.exports.postBooking = async (req,res) => {
    const bookinginfo= {
        bookingType: req.body.bookingType,
        hotelID: req.body.hotelID,
        numberOfRooms: req.body.numberOfRooms,
        tourID: req.body.tourID,
        BookingDate: req.body.BookingDate,
        price: req.body.price
    };
    try{
        const createdBooking = await bookingsService.makeBooking(bookinginfo);
        return res.status(201).send({
            msg: 'Booking Successful',
            bookingId: createdBooking._id
        });
    }
    catch(err){
        return res.status(500).send({
            error: err.message
        });
    }
};

