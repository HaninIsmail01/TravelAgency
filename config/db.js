const mongoose= require('mongoose'); 

const initializeDBConnection= async () => {
    try{
        await mongoose.connect(process.env.MONGO_CONNECTION_URI);
        console.log(`Connected to Mongo DB server.`);
    }
    catch(error){
        console.log(error);

    }
};

module.exports = initializeDBConnection;