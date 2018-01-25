const router = require('koa-router')()
const existsblessing = require('../controllers/existsblessing');
const saveBlessing = require('../controllers/saveblessing');

module.exports = router.post('*', async(ctx) => {
    let postData = ctx.request.body
    let session = ctx.session
    let openId = postData.openid;
    let type = 'create';
    let existts = await existsblessing({ 'openid': openId });
    console.log(existts)
    if (existts.length) {
        type = 'updata';
    }
    console.log(type)
    let data = await saveBlessing(postData, type);
    ctx.body = data;
});
