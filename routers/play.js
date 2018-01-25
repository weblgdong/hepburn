const router = require('koa-router')()
const getVideo = require('../controllers/play')

module.exports = router
    .get('/', getVideo)