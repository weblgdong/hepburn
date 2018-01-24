/**
 * 验证登录状态
 */

const { wechat } = require('../config');

async function checkLogin(ctx, next) {
    // 如果已授权
    if (ctx.url.indexOf('/uploadvideo') !== -1 || ctx.url.indexOf('/blessingWall') !== -1) {
        let _url = ctx.url.substring(1)
        let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wechat.openid}&redirect_uri=${wechat.hostname}wechat_redirect&response_type=code&scope=snsapi_userinfo&state=${_url}#wechat_redirect`
        if (ctx.session.openid) {
            await next();
        } else {
            ctx.redirect(url);
        }
    } else {
        await next();
    }
}

module.exports = {
    checkLogin
}