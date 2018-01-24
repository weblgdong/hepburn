const getOpenId = require('../util/getopenid');
const router = require('koa-router')();

module.exports = router.post('*', async(ctx) => {
    let postData = ctx.request.body
    let code = postData.code;
    let data = await getOpenId(code);
    ctx.body = data;
});