const praise = require('../model/praise');

function toLaud(id) {
    return new Promise((resolve, reject) => {
        praise.create({ openid: id }, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = toLaud;