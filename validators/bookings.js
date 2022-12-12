const {check} = require("express-validator");

module.exports.validatePostReview = () => {
    const ValidationMiddleWare = [

        check('bookingType').notEmpty().withMessage('Please include your booking type.'),
        check("bookingDate").notEmpty().withMessage('Please include your booking date.'),
        check('price').notEmpty().withMessage('Please include the booking price.')

    ];
    return ValidationMiddleWare;
};