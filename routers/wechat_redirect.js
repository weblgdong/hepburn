const router = require('koa-router')();
const accessToken = require('../util/accessToken');
const refreshToken = require('../util/refreshToken');

module.exports = router.get('*', async(ctx) => {
    let request = ctx.request;
    let req_query = request.query;
    let toUrl = '/' + req_query.state;
    if (req_query.code) {
        let data = await accessToken(req_query.code);
        let { access_token, openid, refresh_token } = JSON.parse(data);
        let _refreshToken = await refreshToken(refresh_token);
        access_token = JSON.parse(_refreshToken).access_token;
        ctx.session = {
            access_token,
            openid
        }
        ctx.body = 'ok'
        ctx.redirect(toUrl);
    }
});