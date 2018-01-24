// getAuthority
const request = require('request');
const iconv = require('iconv-lite');
const { wechat } = require('../config');

function getAuthority() {
    let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wechat.appid}&redirect_uri=https://lgdong.cn/wechat/index.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
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

module.exports = getAuthority;