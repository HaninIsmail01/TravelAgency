const{Router} = require('express');

const TourValidator = require('../validators/tours');

const TourController = require('../controllers/tours');

const TourRouter = Router();

TourRouter.get('/', TourController.getTours);
TourRouter.post('/', TourController.postTour);
TourRouter.delete('/:TourId', TourController.deleteTour);

module.exports = TourRouter;
