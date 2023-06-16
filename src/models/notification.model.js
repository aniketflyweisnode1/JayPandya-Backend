const mongoose = require('mongoose');

const notification   = mongoose.Schema({
    message: {
        type: String
    }, 
})

const Notify =  mongoose.model('notification', notification);


export default Notify