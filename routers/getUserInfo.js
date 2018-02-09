// 公众平台
const router = require('koa-router')();
const getUserInfo = require('../util/getUerInfo');
const createCaller = require('../controllers/caller');

module.exports = router.get('*', async(ctx) => {
    let postData = ctx.request.body
    let code = postData.code;
    let userInfo = await getUserInfo(code.access_token, code.openid);
    console.log('userInfo',userInfo);
    if(userInfo){
        await createCaller(userInfo);
    }
    ctx.body = userInfo;
});