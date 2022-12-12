const { Router }= require('express');


const ReviewsValidators = require('../validators/reviews');

const ReviewsController = require('../controllers/reviews');

const ReviewsRouter = Router();

ReviewsRouter.get('/', ReviewsController.getReviews);
ReviewsRouter.post('/', ReviewsController.postReviews);
ReviewsRouter.delete('/:bookingID', ReviewsController.deleteReview);

module.exports = ReviewsRouter;