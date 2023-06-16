import mongoose from 'mongoose';

const supportSchema = mongoose.Schema({
    email: {
        type: String, 
    },
    mobile: {
        type: Number,
        default: 0
    }, 
  whatpapp : {
    type: Number,
    default:0
  }
})

const Support  = mongoose.model('supportSchema', supportSchema);

export default Support