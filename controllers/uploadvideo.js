const getUerInfo = require('../util/getUerInfo');
const findUserBlessing = require('../controllers/findUserBlessing');
const updateUserInfo = require('../controllers/updateUserInfo');
// const createCaller = require('./caller');

module.exports = async(ctx) => {
    let { access_token, openid } = ctx.session;
    let data = await getUerInfo(access_token, openid);
    let res = await findUserBlessing(openid);
    // await createCaller(data);
    
    data = JSON.parse(data);
    let { nickname, headimgurl } = data;
    let json = {
        nickname,
        headimgurl,
        openid,
        coverPath: ''
    }
    console.log(data);

    if (res) {
        if(!res.nickName || !res.avatarUrl){
            if(headimgurl){
                updateUserInfo(openid,{nickName:nickname,avatarUrl:headimgurl});
            }
        }
        json.coverPath = res.coverPath
    }
    await ctx.render('uploadvideo', json);
}