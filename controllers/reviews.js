// importing the ReviewsService for the Service controller 
const ReviewsService = require('../services/reviews')

module.exports.getReviews = async (req,res) => {
    try {
        const reviews = await ReviewsService.ViewPastReviews();

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
        const createdReview = await bookingsService.AddReviews(ReviewInfo);
        
        return res.status(201).send({
            msg: 'Booking Successful',
            ReviewId: createdReview._id
        });
    }
    catch(err){
        return res.status(500).send({
            error: err.message
        });
    }
};