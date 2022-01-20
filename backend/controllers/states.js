// const States = require('../models/state');
const Countries = require('../models/countries');
const base64id = require('base64id');
const Statess = require('../models/state');
const States = require('country-state-city').State;

exports.insertStates = async(req,res,next)=>{
    const data = req.body.data;
    const allState = data.map(async stateData=>{
        const countryData =await Countries.findOne({where:{name:stateData.country}})
        const saveStateData = stateData.state.map(async state =>{
            Statess.create({
                uid:base64id.generateId(),
                name:state.name,
                CountryUid:countryData.uid
            })
        })
        return saveStateData;
    })
    Promise.all(allState).then(result=>{
        return res.status(200).json({status:1,msg:'states saved successfully'});
    }).catch(err=>{
        return res.status(500).json({status:0,msg:'something went wrong'});
    });
};

// exports.statesByCountries= async(req,res,next)=>{
//     const country = req.query.country;
//     Countries.findOne({where:{name:country}})
//         .then(async data=>{
//             if(data){
//                 Statess.findAll({where:{CountryUid:data.uid}})
//                     .then(async allState=>{
//                         if(allState.length>0){
//                             return res.status(200).json({status:1,msg:'All State',data:allState});
//                         }
//                     }).catch(err=>{
//                         return res.status(500).json({status:0,msg:'unable to fetch state Data.Server Timeout'});
//                     });
//             }else{
//                 return res.status(403).json({status:1,msg:'Countries not found'});
//             }
//         }).catch(err=>{
//             return res.status(500).json({status:0,msg:'Something went wrong'});
//         })
// }

exports.states = async(req,res,next)=>{
    try{
        const stateData = States.getAllStates();
        return res.status(200).json({data:stateData});
        const allStates = await stateData.map(async thisData=>{
        const allStates = await Statess.bulkCreate([{
            uid:base64id.generateId(),
            name:thisData.name,
            isoCode:thisData.isoCode,
            countryCode:thisData.countryCode
        }])
        return allStates;
    })
    return res.status(200).json({status:1,msg:'States saved successfully'});
}catch(err){
    console.log(err);
    return res.status(500).json({status:0,msg:'Something went wrong'});
}
        
}

exports.statesByCountries = async(req,res,next)=>{
    const countryCode =  req.query.countryCode;
    Statess.findAll({where:{countryCode:countryCode}})
            .then(async states=>{
                if(states.length>0){
                    return res.status(200).json({status:1,msg:'states list:',data:states});
                }else{
                    return res.status(403).json({status:1,msg:'Please check country code'});
                }
            }).catch(err=>{
                console.log(err);
                return res.status(500).json({status:0,msg:'something went wrong'});
            });
}