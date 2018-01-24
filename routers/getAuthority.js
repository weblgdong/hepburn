// 公众平台
const router = require('koa-router')();
const getAuthority = require('../util/getAuthority');

module.exports = router.get('*', async(ctx) => {
    let request = ctx.request;
    let req_query = request.query;
    ctx.body = req_query;
});