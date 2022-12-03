const { Router }= require('express');

const bookingsController = require('../controllers/bookings');

const bookingsRouter = Router();

bookingsRouter.get('/', bookingsController.getBookings);
bookingsRouter.post('/', bookingsController.postBooking);

module.exports = bookingsRouter;