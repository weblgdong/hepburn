const router = require('koa-router')();
const uploadFile = require('../util/upload');
const path = require('path');
const createCover = require('../util/createCover');

module.exports = router.post('*', async(ctx) => {
    // 上传文件请求处理
    let result = { success: false };
    let serverFilePath = path.join(__dirname, '../static/upload');

    // 上传文件事件
    result = await uploadFile(ctx, {
        fileType: 'video',
        path: serverFilePath
    })
    let coverPath = await createCover(ctx, result.src);
    if (coverPath.mp4) {
        result.pictureUrl = coverPath.mp4;
    }
    result.coverPath = coverPath.path;
    result.src = '';
    ctx.body = result
})