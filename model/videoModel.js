const mongoose = require("mongoose");

// Collection name or table name is Videos
const videoModel = mongoose.model('Videos', {
    title: {
        required: true,
        unique: true,
        type: String,
    },
    description: {
        type: String,
        required: false
    },
    imgUrl: {
        type: String,
        required: false
    },
    publishedAt : {
        type: String,
        required: false
    },
});

module.exports = videoModel;