const praise = require('../model/praise');

function findLaud(id) {
    return new Promise((resolve, reject) => {
        praise.find({ openid: id }, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = findLaud;