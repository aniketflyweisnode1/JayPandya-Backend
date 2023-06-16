import mongoose from 'mongoose';

const helpAndSupport = mongoose.Schema({
    name: {
        type: String
    }, 
    message: {
        type: String
    }
})


const Help = mongoose.model('helpandSupport', helpAndSupport);

export default Help;