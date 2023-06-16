import mongoose from 'mongoose';


const bannerSchema = mongoose.Schema({
    description: {
        type: String,
    }, 
    image: []
})

const Banner = mongoose.model('banners', bannerSchema);

export default Banner