const request = require('request');
const iconv = require('iconv-lite');
const { wechat } = require('../config');
/**
 * @function 获取微信openId
 * @param  {String} code 微信code
 * @return {type} openId
 */
function getOpenId(code) {
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${wechat.openid}&secret=${wechat.secret}&js_code=${code}&grant_type=authorization_code`
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

module.exports = getOpenId;