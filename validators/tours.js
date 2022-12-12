const {check} = require("express-validator");

module.exports.validatePostReview = () => {
    const ValidationMiddleWare = [

        check('tourActivities').notEmpty().withMessage('Please include your tour activities.'),
        check("tourName").notEmpty().withMessage('Please include the tour name.'),
        check('date').notEmpty().withMessage('Please include the tour date.'),
        check('price').notEmpty().withMessage('Please include the tour price.')

    ];
    return ValidationMiddleWare;
};