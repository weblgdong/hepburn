const getVideo = require('../controllers/getVideo');

module.exports = async(ctx) => {
    let request = ctx.request
    let req_query = request.query
    let id = req_query.id;
    let json = await getVideo(id);
    await ctx.render('play', json);
}