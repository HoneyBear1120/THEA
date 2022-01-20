const Categories = require("../models/Categories");
const base64Id = require('base64id');

exports.allCategories= (req,res,next)=>{
    Categories.findAll({where:{},attributes:['categoryId','name','icon','template_name'],order:[['name','ASC']]})    
               .then(async data=>{
                   if(data.length>0){
                        let index=data.findIndex(category=>{
                            return category.name==='Request';
                        })

                        if(index!=-1){
                            let requestObj=data[index];
                             data = [...data.slice(0, index), ...data.slice(index+1)]
                             data.push(requestObj)

                            
                        }

                        console.log("JKLKLLWEDw", data)

                       return res.status(200).json({status:1,msg:'All categories',data:data});
                   }
               })
               .catch(err=>{
                   console.log(err)
                   return res.status(500).json({status:0,msg:'something went wrong'});
               });
}

exports.insertCategory = async(req,res,next)=>{
    const categoryList=req.body.categories;
    const data = categoryList.map(async listData=>{
        const categoryData = await Categories.create({
            categoryId:base64Id.generateId(),
            name:listData.name,
            icon:listData.icon,
        })
        return categoryData
    })
    Promise.all(data).then(async result=>{
        return res.status(200).json({status:1,msg:'Categories inserted successfully'})
    }).catch(err=>{
        console.log(err);
        return res.status(500).json({status:0,msg:'something went wrong'});
    })
}