const ReviewModel = require('../models/Review');

module.exports.retrieveReview = async () => {
    try{
        const Reviews = await ReviewModel.find();
        return Reviews;
    }
    catch(err){
        throw new Error(`Couldn't find Reviews`);
    }
}

module.exports.makeReview = async (ReviewInfo) => {
    try{
        const Review = new ReviewModel({
            
        });
        const createdReview = await Review.save();
        return createdReview;
    }
    catch(err){
        throw new Error(`Couldn't make bookings`);
    }
}