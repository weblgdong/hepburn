const blessing = require('../model/blessing');

function getVideo(id) {
    return blessing.findOne({ '_id': id }).exec()
}
module.exports = getVideo;