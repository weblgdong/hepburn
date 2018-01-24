// 检查token是否过期
const request = require('request');
const iconv = require('iconv-lite');
const { wechat } = require('../config');

function checkToen(access_token) {
    let url = `https://api.weixin.qq.com/sns/auth?access_token=${access_token}&openid=${wechat.openid}`;
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

module.exports = checkToen;