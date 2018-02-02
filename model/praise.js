const mongoose = require('mongoose');
const praiseSchema = new mongoose.Schema({
    openid: String,
    time: {
        type: Number,
        default: Date.now
    }
});

const praiseModel = mongoose.model('praise', praiseSchema);

module.exports = praiseModel;