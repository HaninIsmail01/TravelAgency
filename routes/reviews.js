const { Router }= require('express');

const ReviewsController = require('../controllers/reviews');

const ReviewsRouter = Router();

ReviewsRouter.get('/', ReviewsController.getReviews);
ReviewsRouter.post('/', ReviewsController.postReviews);

module.exports = ReviewsRouter;