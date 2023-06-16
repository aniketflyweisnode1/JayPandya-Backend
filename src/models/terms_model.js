const mongoose = require('mongoose');

const terms = mongoose.Schema({
    terms: {
        type: String
    }, 
})

const Terms =  mongoose.model('terms', terms);

export default Terms