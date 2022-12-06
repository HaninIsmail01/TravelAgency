const bookingsService = require('../services/bookings');
var ObjectID = require('mongodb').ObjectId;

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
    const bookingId = req.body._id;
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

module.exports.deleteBooking = async (req, res) => {
  const bookingId = req.body._id;
  try {
    await bookingsService.cancelBooking(bookingId);
    return res.send({
      msg: 'Booking deleted successfully.'
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.updateBooking = async (req,res) => {
  const bookingId = req.body._id;
  const bookinginfo= {
      bookingType: req.body.bookingType,
      hotel: req.body.hotel,
      numberOfRooms: req.body.numberOfRooms,
      tour: req.body.tour,
      bookingDate: req.body.bookingDate,
      price: req.body.price
  };
  try{
      const updatedBooking = await bookingsService.updateBooking(bookingId, bookinginfo);
      return res.status(201).send({
          msg: 'Booking updated successfully',
          bookingId: updatedBooking._id
      });
  }
  catch(err){
      return res.status(500).send({
          error: err.message
      });
  }
};

