const router = require('koa-router')()
const existsblessing = require('../controllers/existsblessing');
const saveBlessing = require('../controllers/saveblessing');

module.exports = router.post('*', async(ctx) => {
    let postData = ctx.request.body
    let session = ctx.session
    let openId = session.openid;
    let type = 'create';
    let existts = await existsblessing({ 'openid': openId });
    if (existts.length) {
        type = 'updata';
    }
    ctx.body = await saveBlessing(postData, type);
});