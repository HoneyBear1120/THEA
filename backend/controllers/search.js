const UserCategories = require('../models/UserCategory');
const Encryptor = require('simple-encryptor')(process.env.encryptkey);
const sequelize=require('../utils/database');
const search=require('../models/search');

exports.searchItems = async(req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }

    try {

    const search_text = req.query.search.toLowerCase();
    if(search_text&&search_text!=''){
        const capitalSearch = search_text.toUpperCase();
             
        const [results, metadata] = await sequelize.query(`select "userCategories"."userCategoryId","userCategories"."title","userCategories"."updatedAt" as "createdAt", "userCategories"."custom_updatedAt", "categories"."icon","userCategories"."recently" from "userCategories" inner join "categories" on "userCategories"."categoryCategoryId"="categories"."categoryId"   where  (lower("userCategories"."formData"::text) like '${search_text}%' or lower("title") like '${search_text}%' or lower("categories"."name") like '${search_text}%') and "userCategories"."userUid"='${req.userId}'and "userCategories"."isActive" = true order by "userCategories"."recently" DESC`);

          let categoryFirst=upperCaseOne(search_text)
        const [results2, metadata2] = await sequelize.query(`
        select distinct  "categories"."categoryId","categories"."name","categories"."icon" from "userCategories" right join "categories" on "userCategories"."categoryCategoryId"="categories"."categoryId" where "userCategories"."userUid"='${req.userId}' and lower("categories"."name" )like '${search_text}%'`);

         
        // let results3= await  search.findAll({where:{userUid:req.userId},incldue:[{model:UserCategories}]})
        const results3=await fetchSearch(req.userId)
 
          res.status(200).json({status:1,message:'Returns', data:{
              items:results,
              categories:results2,
              resentSearches:results3
          }   }) 
        

    }else{
        let results3=await fetchSearch(req.userId)

        res.status(200).json({status:1,message:'Returns', data:{
            items:[],
            categories:[],
            resentSearches:results3
        }   }) 

    } 
        
    } catch (error) {

          console.log(error)
         
          res.status(500).json({status:0,message:'Returns', data:[]}) 
    }


}


exports.recentSearch=async (req,res,next)=>{

try {


  console.log(req)


    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }


    let savedFormId=req.body.savedFormId;

    if(savedFormId){
      let status= await search.findOne({where:{userCategoryUserCategoryId:savedFormId}})
      if(status){

       status.count=status.count+1;
       await status.save()

       return  res.status(200).json({status:1, message:'Data Saved and incremented Count by 1',data:status})

      }else {
        
     await search.create({userUid:req.userId,count:1,userCategoryUserCategoryId:savedFormId})
     return res.status(200).json({status:1,message:'Data Saved Succesfully'})

      }

    }res.status(400).json({status:1,message:'Thea -API needs to have a keyword.'})
 


} catch (error) {
    






}



















}


async function fetchSearch(userID){
   // const [results3,metadata3]=await sequelize.query(`select "userCategories"."title" from "searches" RIGHT JOIN "userCategories" ON "searches"."userCategoryUserCategoryId"="userCategories"."userCategoryId" where "userUid"=${userID}`)
    

     let results3= await  search.findAll({where:{userUid:userID},include:[{model:UserCategories,attributes: ['title','userCategoryId']}]})
  //    console.log(results3)

    return results3;

}


function upperCaseOne(str){
    let source=str.charAt(0).toUpperCase();
    return source+str.slice(1,str.length);


}