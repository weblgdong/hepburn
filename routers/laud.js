const router = require('koa-router')()
const toLaud = require('../controllers/toLaud');
const addLaud = require('../controllers/addLuad');
const findUerLaud = require('../controllers/findUerLaud');

module.exports = router.post('*', async(ctx) => {
    let postData = ctx.request.body;
    let useOpenId = ctx.session.openid;
    // 添加
    // let data = await toLaud(postData);
    // 查询该用户是否点赞
    let findUer = await findUerLaud(useOpenId);
    let result = {
        errNo: false,
        content: '每个ID只能点赞一次'
    }
    if (findUer.length) {
        ctx.body = result;
    } else if(!useOpenId){
    	result.content='服务器繁忙请稍后重试!'
        ctx.body = result;
    }else {
        let data = await toLaud(useOpenId);
        let praise = await addLaud(postData.id);
        result.errNo = true
        result.content = '点赞成功'
        result.id = postData.id;
        result.praise = praise;
        ctx.body = result;
    }
});
