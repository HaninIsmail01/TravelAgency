const {validationResult} = require('express-validator');

const hotelService = require('../services/hotels');
var ObjectID = require('mongodb').ObjectId;

module.exports.gethotelss = async (req,res) => {
    try{
        const hotelss = await hotelsService.viewHotel();
        res.send({hotels});
    }
    catch(err){
        res.status(500);
        res.send({
            error: err
        });
    }
};

module.exports.postBooking = async (req,res) => {

  const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(422).send({
        error: firstError.msg
      });
    }  

    const hotelinfo= {
        bookingType: req.body.bookingType,
        hotel: req.body.hotel,
        numberOfRooms: req.body.numberOfRooms,
        tour: req.body.tour,
        bookingDate: req.body.bookingDate,
        price: req.body.price
    };
    try{
        const createdHotel = await hotelService.add(hotelinfo);
        return res.status(201).send({
            msg: 'Hotel added Successful',
            bookingId: createdHotel._id
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

