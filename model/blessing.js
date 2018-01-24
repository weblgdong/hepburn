const mongoose = require('mongoose');
const blessingSchema = new mongoose.Schema({
    nickName: String,
    avatarUrl: String,
    openid: String,
    pictureUrl: String,
    coverPath: {
        type: String,
        default: ''
    },
    praise: {
        type: Number,
        default: 0
    },
    time: {
        type: Number,
        default: Date.now()
    }
});

const blessingModel = mongoose.model('blessing', blessingSchema);

module.exports = blessingModel;