const blessingModel = require('../model/blessing');

function updateUserInfo(openid,data){
  var update = { $set: data };
  blessingModel.update({ openid: openid }, update, { multi: true }, function(err, data) {
      if (err) {
          reject(err);
      } else {
          resolve(data);
      }
  });
}

module.exports = updateUserInfo;