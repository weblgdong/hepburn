const https = require('https');
const http = require('http');
const fs = require('fs');
const session = require('koa-session-minimal')
var MongoStore = require('koa-generic-session-mongo');

const Koa = require('koa')
const app = new Koa()
var cors = require('koa2-cors');
const views = require('koa-views')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const routers = require('./routers/index')

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/hepburn");
app.use(cors());
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
    console.log('open');
});
app.use(session({
    // cookie: { maxAge: 24 * 100000 * 36 }, // 过期时间（毫秒） 
    cookie: { maxAge: 172800000 },
    store: new MongoStore()
}))


// 使用ctx.body解析中间件
app.use(bodyParser())

app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
app.use(routers.routes()).use(routers.allowedMethods())
app.use(static(
    path.join(__dirname, staticPath)
))

app.listen(80, () => {
    // console.log('[demo] upload-pic-async is starting at port 3000')
})

const options = {
    // key: fs.readFileSync('ssl/214297685440275.key'),
    // cert: fs.readFileSync('ssl/214297685440275.pem')
};

//http.createServer(app.callback()).listen(80);
// https.createServer(options, app.callback()).listen(443);
