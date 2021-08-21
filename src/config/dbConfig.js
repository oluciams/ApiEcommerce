require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerceAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});


mongoose.connection.on('error', () => console.error('Error in db connection'));

mongoose.connection.once('open', () => console.log(' db connected'));