const { Router }= require('express');

const bookingsController = require('../controllers/bookings');

const bookingsRouter = Router();

bookingsRouter.get('/', bookingsController.getBookings);
bookingsRouter.get('/:bookingID', bookingsController.getBooking);
bookingsRouter.post('/', bookingsController.postBooking);
bookingsRouter.delete('/:bookingID', bookingsController.deleteBooking);
bookingsRouter.put('/:bookingID', bookingsController.deleteBooking); // or patch

module.exports = bookingsRouter;