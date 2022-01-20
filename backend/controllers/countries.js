const Countries = require('../models/countries');
const base64id = require('base64id');
const Country = require('country-state-city').Country;

exports.countriesInsert = async (req,res,next)=>{
    const countries = req.body.countries;
    const allCountries = countries.map(async data=>{
        const countryInsert=Countries.create({
            uid:base64id.generateId(),
            name:data.name
        });
        return countryInsert;
    })
    Promise.all(allCountries).then(async result=>{
        return res.status(200).json({status:1,msg:'Countries Saved Successfully'});
    }).catch(err=>{
        return res.status(200).json({status:1,msg:'Something Went wrong'});
    });
};

exports.allCountries = async(req,res,next)=>{
    Countries.findAll({})
             .then(async data=>{
                 if(data.length>0){
                    return res.status(200).json({status:1,msg:'All countries',data:data});
                 }else{
                    return res.status(403).json({status:0,msg:'No country Found.Server Error'});
                 }
             })
             .catch(err=>{
                 return res.status(500).json({status:0,msg:'something went wrong'});
             })
}

exports.countries = async(req,res,next)=>{
    const countryData = await Country.getAllCountries();
    return res.status(200).json({data:countryData});
    const allCountries = await countryData.map(async thisData=>{
        const allCountries = await Countries.bulkCreate([{
            uid:base64id.generateId(),
            name:thisData.name,
            isoCode:thisData.isoCode
        }])
        return allCountries;
    })
    Promise.all(allCountries).then(async result=>{
        return res.status(200).json({status:1,msg:'Countries saved successfully'});
    }).catch(err=>{
        console.log(err);
        return res.status(500).json({status:1,msg:'Something went wrong'});
    })
}