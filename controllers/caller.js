const callerModel = require('../model/caller');

async function createCaller(json){
    return new Promise((resolve,reject)=>{
        callerModel.create(json,function(err,data){
            if(err){
                reject('err')
            }else{
                console.log('访客');
                resolve(data);
            }
        });
    })
}


module.exports = createCaller;