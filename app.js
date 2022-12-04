const express = require('express');

// dotenv file import.
const dotenv = require('dotenv');

// import the function that initiates a DB connection.
const initializeDBConnection = require(`./config/db`);

// imports each service's Router 
const bookingsRouter = require('./routes/bookings');
const ReviewsRouter = require('./routes/reviews');
// parsing the dotenv file, to use the environment variables.
dotenv.config({
  path: './config/.env'
});

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

// Load the bookingRouter  and set its entry route into '/bookings'
// meaning that any route inside bookingsRouter will be prefixed by '/bookings' first
app.use('/bookings', bookingsRouter);
app.use('/reviews', ReviewsRouter);

app.listen(PORT, async () => { 
  console.log(`listening to port number ${PORT}`);

  //calling the Asyn function to initiate DB connection when server starts.
  await initializeDBConnection();
});