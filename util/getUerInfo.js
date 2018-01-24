// 微信公众平台
const request = require('request');
const iconv = require('iconv-lite');
// 拉取用户信息
function getUerInfo(access_token, openid) {
    let url = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`
    return new Promise((resolve, reject) => {
        request({ url, encoding: null }, function(err, response, body) {
            if (err) {
                reject(err);
            } else {
                var result = iconv.decode(body, 'utf-8');
                resolve(result);
            }
        })
    })
}

module.exports = getUerInfo;