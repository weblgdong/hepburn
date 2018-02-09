const getUerInfo = require('../util/getUerInfo');
const getBlessing = require('./existsblessing');
const findUserBlessing = require('../controllers/findUserBlessing');

module.exports = async(ctx) => {
    const title = '上传视频'
    let { access_token, openid } = ctx.session;
    let data = await getUerInfo(access_token, openid);
    let list = await getBlessing({});
    data = JSON.parse(data);
    let { nickname, headimgurl } = data;
    let res = await findUserBlessing(openid);
    if (res) {
        if(!res.nickName || !res.avatarUrl){
            if(headimgurl){
                updateUserInfo(openid,{nickName:nickname,avatarUrl:headimgurl});
            }
        }
        json.coverPath = res.coverPath
    }
    await ctx.render('blessingWall', {
        nickname,
        headimgurl,
        openid,
        list
    });
}