// importing the ReviewsService for the Service controller 
const ReviewsService = require('../services/reviews')
var ObjectID = require('mongodb').ObjectId;

module.exports.getReviews = async (req,res) => {
    try {
        const reviews = await ReviewsService.ViewPastReviews();
        res.send({reviews});

    } catch (error) {
        res.status(500);
        res.send({
            error: err
        });
    }
}

module.exports.postReviews = async (req,res) => {
    const ReviewInfo= {
        ReviewDescription: req.body.ReviewDescription,
        ReviewRating: req.body.ReviewRating,
        ReviewDate: req.body.ReviewDate
    };
    try{
        const createdReview = await ReviewsService.AddReviews(ReviewInfo);
        
        return res.status(201).send({
            msg: ' Review uploaded successfully',
            ReviewId: createdReview._id
        });
    }
    catch(err){
        return res.status(500).send({
            error: err.message
        });
    }
};