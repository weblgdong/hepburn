const router = require('koa-router')();
const removeBlessing = require('../controllers/removeBlessing');

module.exports = router.get('*', async(ctx) => {
    let request = ctx.request;
    let req_query = request.query;
    let id = req_query.id;
    if (id) {
        let data = await removeBlessing(id);
        ctx.body = data;
    } else {
        ctx.body = 'err';
    }

});