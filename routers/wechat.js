const router = require('koa-router')()
const crypto = require('crypto');

module.exports = router.get('*', async(ctx) => {
    let request = ctx.request;
    let req_query = request.query;
    let token = 'hepburn';
    let signature = req_query.signature;
    let nonce = req_query.nonce;
    let timestamp = req_query.timestamp;
    let echostr = req_query.echostr;
    let str = [token, timestamp, nonce].sort().join('');
    let sha = sha1(str)
    if (sha === signature) {
        ctx.body = echostr + '';
    } else {
        ctx.body = 'wrong';
    }
});

function sha1(str) {
    var md5sum = crypto.createHash("sha1");
    md5sum.update(str);
    str = md5sum.digest("hex");
    return str;
}