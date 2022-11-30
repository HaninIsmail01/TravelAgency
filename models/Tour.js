const {Schema, model}= require('mongoose');

const UserSchema= new Schema({

    
    
    TourID: {
        type: 'intger',
        required: true
    },
    
    TourDescription: {
        type: 'string',
        required: true
    },
    
    TourName: {
        type: 'string',
        required: true
    },

    TourDate: {
        type: 'date',
        required: true
    },

    TourPrice: {
        type: 'number',
        required: true
    },

    TourFlight: {
        type: 'string',
        required: true
    }
    

    

    
    
    
    
    }); 