const express = require('express');
const dotenv = require('dotenv');

const initializeDBConnection = require(`./config/db`);

const bookingsRouter = require('./routes/bookings');

dotenv.config({
  path: './config/.env'
});

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/bookings', bookingsRouter);


app.listen(PORT, async () => { 
  console.log(`listening to port number ${PORT}`);
  await initializeDBConnection();
});