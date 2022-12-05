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

module.exports.getBooking = async (req,res) => {
    const bookingId = req.params.bookingId;
    try {
      const booking = await bookingsService.retrieveBookingByID(bookingId);
      if (!booking) {
        return res.status(404).send({
          error: 'Booking not found.'
        });
      }
      return res.send({
        booking: booking
      });
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
};

module.exports.postBooking = async (req,res) => {
    const bookinginfo= {
        bookingType: req.body.bookingType,
        hotel: req.body.hotel,
        numberOfRooms: req.body.numberOfRooms,
        tour: req.body.tour,
        bookingDate: req.body.bookingDate,
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

