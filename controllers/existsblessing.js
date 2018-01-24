const blessingModel = require('../model/blessing');

async function existsBlessing(params) {
    return await blessingModel.find(params).exec();
}

module.exports = existsBlessing;