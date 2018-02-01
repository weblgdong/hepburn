const router = require('koa-router')()
const getBlessing = require('../controllers/existsblessing');
const blessingModel = require('../model/blessing');

module.exports = router.post('*', async(ctx) => {
    let postData = ctx.request.body;
    let page = postData.page;
    let data = await blessingModel.find({}).sort({'time':-1}).exec();
    ctx.body = data;
});