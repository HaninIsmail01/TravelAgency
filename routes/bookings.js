const { Router }= require('express');

const bookingsController = require('../controllers/bookings');

const bookingssRouter = Router();

bookingsRouter.get('/', bookingsController.getBookings);
bookingssRouter.post('/', bookingsController.postBooking);

module.exports = bookingsRouter;