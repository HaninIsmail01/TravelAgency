const{Router} = require('express');

const TourController = require('../controllers/tours');
const TourRouter = Router();

ReviewsRouter.get('/', TourController.getTours);
ReviewsRouter.post('/', TourController.postTour);
bookingsRouter.delete('/:tourID', TourController.deleteTour);

module.exports = ToursRouter;
