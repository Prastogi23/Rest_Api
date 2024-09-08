const productSchema = require("../models/product");

const getallproduct = async (req,res) => {
    const queryObject={};
    const { company , name , feature , sort ,select} = req.query;
    if(company){
        queryObject.company= {$regex: company ,$options:"i"};
    }
    if(name){
        queryObject.name= {$regex: name , $options:"i"};
    }
    if(feature){
    queryObject.feature = feature;
     }

    
     let page = Number(req.query.page) || 1;
     let limit = Number(req.query.limit)||3;
     let skip = (page-1)*limit;
 
     let apidata=productSchema.find(queryObject).skip(skip).limit(limit); 

    if(sort){
        let queryfix = sort.replace(","," ");
        console.log(queryfix);
       apidata = apidata.sort(queryfix);
    }

    if(select){
        let queryfix = select.replace(","," ");
        console.log(queryfix);
       apidata = apidata.select(queryfix);
    }

    const myData = await apidata ;
    res.status(200).json({ myData });

    console.log(queryObject);
};
   

const getallproducttesting = async (req,res) => {
    res.status(200).json({mes:"My testing product"});    
};


module.exports = {getallproduct , getallproducttesting};