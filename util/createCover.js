var ffmpeg = require('fluent-ffmpeg');
const crypto = require('crypto');
const path = require('path');
const secret = 'abcdefg';

function createCover(ctx, videoName) {
    const hash = crypto.createHmac('md5', secret)
        .update(videoName)
        .digest('hex');
    let extname = path.extname(videoName);
    return new Promise((resolve, reject) => {
        if (extname.toLocaleLowerCase() === '.mp4') {
            ffmpeg(videoName)
                .screenshots({
                    timestamps: ['1%'],
                    filename: `${hash}.png`,
                    folder: 'static/upload/cover/',
                }).on('end', function() {
                    resolve({
                        path: `/upload/cover/${hash}.png`
                    });
                    console.log('创建成功');
                });
        } else {
            ffmpeg(videoName)
                .videoCodec('libx264')
                //.audioCodec('libmp3lame')
                .save(`static/upload/mp4/${hash}.mp4`)
                .screenshots({
                    timestamps: ['1%'],
                    filename: `${hash}.png`,
                    folder: 'static/upload/cover/',
                }).on('end', function() {
                    resolve({
                        mp4: `/upload/mp4/${hash}.mp4`,
                        path: `/upload/cover/${hash}.png`
                    });
                    console.log('创建成功');
                });
        }

    })
}

module.exports = createCover;