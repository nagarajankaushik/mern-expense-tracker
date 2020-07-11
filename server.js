const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
morgan
const transactions = require('./routes/transactions')
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'})

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(
        path.resolve(__dirname, 'client', 'build', 'index.html')));
}
app.listen(PORT, console.log(`Express server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
