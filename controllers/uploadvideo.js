const getUerInfo = require('../util/getUerInfo');
const findUserBlessing = require('../controllers/findUserBlessing');

module.exports = async(ctx) => {
    let { access_token, openid } = ctx.session;
    let data = await getUerInfo(access_token, openid);
    let res = await findUserBlessing(openid);
    data = JSON.parse(data);
    let { nickname, headimgurl } = data;
    console.log(data);
    let json = {
        nickname,
        headimgurl,
        openid,
        coverPath: ''
    }
    if (res) {
        json.coverPath = res.coverPath
    }
    await ctx.render('uploadvideo', json);
}