const blessingModel = require('../model/blessing');
async function existsBlessing(id) {
    return new Promise((resolve, reject) => {
        if (id) {
            blessingModel.remove({ _id: id }, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('ok');
                }
            })
        } else {
            reject('err')
        }

    })
}

module.exports = existsBlessing;