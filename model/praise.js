const mongoose = require('mongoose');
const praiseSchema = new mongoose.Schema({
    openid: String,
    time: {
        type: String,
        default: new Date().getFullYear() + '-' + new Date().getMonth() + 1 + '-' + new Date().getDate()
    }
});

const praiseModel = mongoose.model('praise', praiseSchema);

module.exports = praiseModel;