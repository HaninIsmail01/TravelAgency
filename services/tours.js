module.exports.BookTour = async (bookinginfo) => {
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