const {check} = require("express-validator");

module.exports.validatePostReview = () => {
    const ValidationMiddleWare = [

        check('reviewDescription').notEmpty().withMessage('Please include your review description.'),
        check("reviewRating").notEmpty().withMessage('Please include your review rating.'),
        check('reviewDate').notEmpty().withMessage('Please include the date of your review.')

    ];
    return ValidationMiddleWare;
};
