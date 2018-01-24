const getUerInfo = require('../util/getUerInfo');
const getBlessing = require('./existsblessing');

module.exports = async(ctx) => {
    const title = '上传视频'
    let { access_token, openid } = ctx.session;
    let data = await getUerInfo(access_token, openid);
    let list = await getBlessing({});
    data = JSON.parse(data);
    let { nickname, headimgurl } = data;

    await ctx.render('blessingWall', {
        nickname,
        headimgurl,
        openid,
        list
    });
}