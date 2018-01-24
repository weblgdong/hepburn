const blessingModel = require('../model/blessing');

function saveBlessing(data, type) {
    return new Promise((resolve, reject) => {
        if (type === 'create') {
            blessingModel.create(data, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        } else {
            data.time = Date.now();
            var update = { $set: data };
            blessingModel.update({ openid: data.openid }, update, { multi: true }, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }
    });
}

module.exports = saveBlessing;