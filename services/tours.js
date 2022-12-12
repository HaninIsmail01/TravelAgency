const TourModel = require("../models/Tour");

module.exports.bookTour = async (bookinginfo) => {
    try{
        const booking = new BookingModel({
            bookingType: bookinginfo.bookingType,

            hotel :{
                name: bookinginfo.name,
                price: bookinginfo.price,
                services: bookinginfo.services,
                roomType: bookinginfo.roomType
            },
            numberOfRooms: bookinginfo.numberOfRooms,

            tour :{
                tourActivities: bookinginfo.tourActivities,
                tourName: bookinginfo.tourName,
                date: bookinginfo.date,
                price: bookinginfo.price,
                flightNumber: bookinginfo.flightNumber
            },
            bookingDate: bookinginfo.bookingDate,
            price: bookinginfo.price

        });
        const createdBooking = await booking.save();
        return createdBooking;
    }
    catch(err){
        throw new Error(`Couldn't make booking`);
    }
}

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