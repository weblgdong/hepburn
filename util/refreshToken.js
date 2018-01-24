const request = require('request');
const iconv = require('iconv-lite');
const { wechat } = require('../config');

function refreshToken(refresh_token) {
    let url = `https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=${wechat.openid}&grant_type=refresh_token&refresh_token=${refresh_token}`;
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

module.exports = refreshToken;