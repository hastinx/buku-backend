import mongoose from "mongoose";


const favorite = mongoose.Schema({
    bookid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    author: {
        type: Array,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    imgurl: {
        type: String,
        required: false
    }

});

export default mongoose.model('favorite', favorite)