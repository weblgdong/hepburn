const blessing = require('../model/blessing');

function findUserBlessing(id) {
    return blessing.findOne({ openid: id }).exec()
}
module.exports = findUserBlessing;