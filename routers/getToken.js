// 公众平台
const router = require('koa-router')();
const accessToken = require('../util/accessToken');
const getUserInfo = require('../util/getUerInfo');

module.exports = router.get('*', async(ctx) => {
    let postData = ctx.request.body
    let code = postData.code;
    let data = await accessToken(code);
    data = JSON.parse(data);
    let userInfo = await getUserInfo(data.access_token, data.openid);
    ctx.body = data;
});