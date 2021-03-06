const router = require('koa-router')()
const getBlessing = require('../controllers/existsblessing');
const blessingModel = require('../model/blessing');

module.exports = router.post('*', async(ctx) => {
    let postData = ctx.request.body;
    let page = postData.page;
    let data = await blessingModel.find({}).skip(page * 20).limit(20).sort({'time':-1}).exec();
    ctx.body = data;
});