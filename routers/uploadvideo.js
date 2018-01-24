const router = require('koa-router')()
const uploadvideo = require('../controllers/uploadvideo')

module.exports = router
    .get('/', uploadvideo)