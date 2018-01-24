const router = require('koa-router')()
const blessingWall = require('../controllers/blessingWall')

module.exports = router
    .get('/', blessingWall)