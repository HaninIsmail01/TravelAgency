const {validationResult} = require('express-validator');

const ToursService = require('../services/tours');
var ObjectID = require('mongodb').ObjectId;

module.exports.getTours = async (req,res) => {
    try {
        const Tours = await ToursService.viewPastTour();
        res.send({Tours});

    } catch (error) {
        res.status(500);
        res.send({
            error: err
        });
    }
};

module.exports.postTour = async (req,res) => {

    const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(422).send({
        error: firstError.msg
      });
    }  

    const TourInfo= {
        tourActivities: req.body.tourActivities,
        tourName: req.body.tourName,
        date: req.body.date,
        price: req.body.price,
        flightNumber: req.body.flightNumber
    };
    try{
        const createdTour = await ToursService.addTour(TourInfo);
        
        return res.status(201).send({
            msg: ' Tour added successfully',
            TourId: createdTour._id
        });
    }
    catch(err){ 
        return res.status(500).send({
            error: err.message
        });
    }
};

module.exports.deleteTour = async (req, res) => {
    const TourId = req.body._id;
    try {
      await TourModel.cancelTour(TourId);
      return res.send({
        msg: 'Tour deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
};