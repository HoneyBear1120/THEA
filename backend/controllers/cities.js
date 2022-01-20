const Cities = require('../models/cities');
const State = require('../models/state');
const base64id= require('base64id');
const city = require('country-state-city').City;
const Countries = require('../models/countries');

exports.insertCities=async(req,res,next)=>{
    const cities = req.body.data;
    const allCities=cities.map(async cityData=>{
        const stateData=await State.findOne({where:{name:cityData.state}});
        const allCityData=cityData.cities.map(async data=>{
            Cities.create({
                uid:base64id.generateId(),
                name:data.name,
                stateUid:stateData.uid
            });
        });
        return allCityData;
    });
    Promise.all(allCities).then(async result=>{
        return res.status(200).json({status:1,msg:"Cities Inserted Successfully"});
    }).catch(err=>{
        return res.status(500).json({status:0,msg:'Something went wrong'});
    });
};

// exports.citiesByStates = async(req,res,next)=>{
//     const stateName=req.query.state;
//     const stateData = await State.findOne({where:{name:stateName}})
    
//     Cities.findAll({where:{stateUid:stateData.uid}})
//           .then(async data=>{
//             if(data.length>0){
//                 return res.status(200).json({status:1,msg:'All cities',data:data});
//             }else{
//                 return res.status(403).json({status:1,msg:'No result Found for this state'});
//             }
//           }).catch(err=>{
//               return res.status(500).json({status:1,msg:'Something went wrong'});
//           });
// }

exports.cities = async(req,res,next)=>{
try{
    const cityData = await city.getAllCities();
    const allCityData  = await cityData.map(async cityList=>{
        const allcityData = await Cities.create({
            uid:base64id.generateId(),
            name:cityList.name,
            countryCode:cityList.countryCode,
            stateCode:cityList.stateCode
        })
        return allcityData;
    }) 
    Promise.all(allCityData).then(result=>{
        return res.status(200).json({status:1,msg:'Cities saved successfully'});
    })
}catch(err){
    return res.status(500).json({status:0,msg:'Something went wrong'});
}
}

exports.citiesByStates =  async(req,res,next)=>{
    const stateCode =  req.query.stateCode;
    const countryCode = req.query.countryCode;

    Cities.findAll({where:{countryCode:countryCode,stateCode:stateCode}})
             .then(async thisData=>{
                 if(thisData.length>0){
                    return res.status(200).json({status:1,msg:'All cities:',data:thisData});
                 }else{
                     return res.status(403).json({status:1,msg:'Cities Doesn\'t exist for this state'});
                 }
             }).catch(err=>{
                 console.log(err);
                 return res.status(500).json({status:0,msg:'something went wrong'});
             })
}