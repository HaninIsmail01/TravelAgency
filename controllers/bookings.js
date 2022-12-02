const bookingsService = require('../services/bookings');

module.exports.getBookings = async (req,res) => {
    try{
        const bookings = await bookingsService.retrieveBooking();
        res.send({products});
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
        //
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

