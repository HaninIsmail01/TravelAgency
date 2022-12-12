const ReviewModel = require('../models/Review');
var ObjectID = require('mongodb').ObjectId;

module.exports.ViewPastReviews = async () => {
    try{
        const Reviews = await ReviewModel.find();
        return Reviews;
    }
    catch(err){
        throw new Error(`Couldn't find Reviews`);
    }
}

module.exports.AddReviews = async (ReviewInfo) => {
    try{
        const Review = new ReviewModel({
            reviewDescription: ReviewInfo.reviewDescription,
            reviewRating: ReviewInfo.reviewRating,
            reviewDate: ReviewInfo.reviewDate
        });
        const createdReview = await Review.save();
        return createdReview;
    }
    catch(err){
        throw new Error(`Couldn't add review`);
    }
}
module.exports.cancelReview = async (ReviewId) => {
    try{
        await ReviewModel.deleteOne({_id: ObjectID(ReviewId)});
    }
    catch(err){
        throw new Error(`Couldn't delete review`);
    }
}