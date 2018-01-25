const router = require('koa-router')()
const { checkLogin } = require('../middle/index');

const home = require('./home')
const upLoadVido = require('./uploadvideo')
const blessingWall = require('./blessingWall')
const upload = require('./upload')

const token = require('./token')
const accesstoken = require('./getToken')
const getUserInfo = require('./getUserInfo')

const saveblessing = require('./saveblessing')
const allblessing = require('./allBlessing')
const wechat = require('./wechat')
const Laud = require('./laud');
const removeBlessing = require('./removeBlessing');
//用户授权 ------------
const getAuthority = require('./getAuthority')

//跳转
const wechatRedirect = require('./wechat_redirect')

router.use(checkLogin);
// router.use('/',wechat.routes(), wechat.allowedMethods())
// router.use('/home', home.routes(), home.allowedMethods())
router.use('/uploadvideo', upLoadVido.routes(), upLoadVido.allowedMethods())
router.use('/blessingWall', blessingWall.routes(), blessingWall.allowedMethods())
router.use('/laud', Laud.routes(), Laud.allowedMethods())
router.use('/removeBlessing', removeBlessing.routes(), removeBlessing.allowedMethods())
    //-------------
router.use('/authority', getAuthority.routes(), getAuthority.allowedMethods())

router.use('/token', token.routes(), token.allowedMethods())
router.use('/accesstoken', accesstoken.routes(), accesstoken.allowedMethods())
router.use('/getuserinfo', getUserInfo.routes(), getUserInfo.allowedMethods())

//跳转
router.use('/wechat_redirect', wechatRedirect.routes(), wechatRedirect.allowedMethods());

router.use('/upload', upload.routes(), upload.allowedMethods())
router.use('/save', saveblessing.routes(), saveblessing.allowedMethods())
router.use('/allblessing', allblessing.routes(), allblessing.allowedMethods())

module.exports = router
