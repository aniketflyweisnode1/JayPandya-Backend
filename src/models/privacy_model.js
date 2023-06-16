const mongoose = require('mongoose');

const privacy  = mongoose.Schema({
    Privacy: {
        type: String
    }, 
})

const Privacy =  mongoose.model('privacy', privacy);

export default Privacy