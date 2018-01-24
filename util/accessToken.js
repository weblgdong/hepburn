// 微信公众平台
const { wechat } = require('../config');
const request = require('request');
const iconv = require('iconv-lite');
/**
 * @function 获取微信openId
 * @param  {String} code 微信code
 * @return {type} openId
 */
function accessToken(code) {
    let url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${wechat.openid}&secret=${wechat.secret}&code=${code}&grant_type=authorization_code`;
    return new Promise((resolve, reject) => {
        request({ url, encoding: null }, function(err, response, body) {
            if (err) {
                reject(err);
            } else {
                var result = iconv.decode(body, 'gbk');
                resolve(result);
            }
        })
    })
}

module.exports = accessToken;