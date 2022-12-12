const HotelModel = require('../models/Hotel');
var ObjectID = require('mongodb').ObjectId;


module.exports.addHotel = async (hotelInfo) => {
    try{
        const hotel = new HotelModel({
            name: hotelInfo.name,
            price: hotelInfo.price,
            services: hotelInfo.services,
            roomType: hotelInfo.roomType
        });
        const createdBooking = await hotel.save();
        return createdBooking;
    }
    catch(err){
        throw new Error(`Couldn't make booking`);
    }
}

module.exports.viewHotel = async () => {
    try{
        const bookings = await HotelModel.find();
        return bookings;
    }
    catch(err){
        throw new Error(`Couldn't find hotel`);
    }
}
module.exports.deleteHotel = async (HotelId) => {
    try{
        await HotelModel.deleteOne({_id: ObjectID(HotelId)});
    }
    catch(err){
        throw new Error(`Couldn't cancel booking`);
    }
}