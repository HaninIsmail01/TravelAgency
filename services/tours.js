const TourModel = require("../models/Tour");

module.exports.viewPastTour = async () => {
    try{
        const Tour = await TourModel.find();
        return Tour;
    }
    catch(err){
        throw new Error(`Couldn't find Tours`);
    }
}

module.exports.addTour = async (Tourinfo) => {
    try{
        const Tour = new TourModel({
            tourActivities: Tourinfo.tourActivities,
            tourName: Tourinfo.tourName,
            date: Tourinfo.date,
            price: Tourinfo.price,
            flightNumber: Tourinfo.flightNumber
        });
        const createdTour = await Tour.save();
        return createdTour;
    }
    catch(err){
        throw new Error(`Couldn't add Tour`);
    }
}

module.exports.cancelTour = async (tourId) => {
    try{
        await TourModel.deleteOne({_id: ObjectID(tourId)});
    }
    catch(err){
        throw new Error(`Couldn't remove Tour`);
    }
}

module.exports.updateTour = async () => {
    try {
        
    } catch (error) {
        throw new Error(`Couldn't update Tour`);
    }
}