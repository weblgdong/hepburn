const mongoose = require('mongoose');
const callerSchema = new mongoose.Schema({
    nickname: String,
    headimgurl: String,
    openid: String,
    city: String
});

const callerModel = mongoose.model('caller', callerSchema);

module.exports = callerModel;
