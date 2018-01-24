const blessingModel = require('../model/blessing');

async function addLuad(id) {
    return new Promise((resolve, reject) => {
        blessingModel.findOne({ _id: id }, function(err, data) {
            praise = data.praise + 1;
            let update = { $set: { praise: praise } };
            blessingModel.update({ _id: id }, update, { multi: true }, function(err) {
                if (err) {
                    reject('err');
                } else {
                    resolve(praise);
                }
            });
        });

    });
}

module.exports = addLuad;