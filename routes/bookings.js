const { Router }= require('express');

const bookingsValidator = require('../validators/bookings');

const bookingsController = require('../controllers/bookings');

const bookingsRouter = Router();

bookingsRouter.get('/', bookingsController.getBookings);
bookingsRouter.get('/:bookingID', bookingsController.getBooking);
bookingsRouter.post('/', bookingsController.postBooking);
bookingsRouter.delete('/:bookingID', bookingsController.deleteBooking);
bookingsRouter.put('/:bookingID', bookingsController.deleteBooking); 

module.exports = bookingsRouter;