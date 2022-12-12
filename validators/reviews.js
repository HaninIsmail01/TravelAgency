const {check} = require("express-validator");

module.exports.validatePostReview = () => {
    const ValidationMiddleWare = [

        check('ReviewDescription').notEmpty().withMessage('Please include your review description.'),
        check("ReviewRating").notEmpty().withMessage('Please include your review rating.'),
        check('ReviewDate').notEmpty().withMessage('Please include the date of your review.')

    ];
    return ValidationMiddleWare;
};
