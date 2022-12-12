const {validationResult} = require('express-validator');

const hotelService = require('../services/hotels');
var ObjectID = require('mongodb').ObjectId;

module.exports.gethotelss = async (req,res) => {
    try{
        const hotelss = await hotelsService.viewHotel();
        res.send({hotels});
    }
    catch(err){
        res.status(500);
        res.send({
            error: err
        });
    }
};







