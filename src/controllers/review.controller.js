const {createOne,getAll,findOne,updateOne,deleteOne} = require("../core/services/review.service");


module.exports.getAll = async(request,response,next)=>{
    try{
        let reviews = await getAll();
        response.status(200).json({
            result:reviews.length,
            data:{
                reviews
            }
        })
    }catch(err){
        next(err);
    }
};
module.exports.createOne = async(request,response,next)=>{
    try{
        let review = await createOne(request.body);
        response.status(200).json({
            result:reviews.length,
            data:{
                review
            }
        })
    }catch(err){
        next(err);
    }
};
module.exports.findOne = async(request,response,next)=>{
    try{
        let review = await findOne(request.params.id);
        response.status(200).json({
            data:{
                review
            }
        })
    }catch(err){
        next(err);
    }
};
module.exports.updateOne = async(request,response,next)=>{
    try{
        let review = await updateOne(request.params.id,request.body);
        response.status(200).json({
            result:reviews.length,
            data:{
                review
            }
        })
    }catch(err){
        next(err);
    }
};
module.exports.deleteOne = async(request,response,next)=>{
    try{
        let review = await deleteOne(request.params.id);
        response.status(200).json({
            message:"deleted"
        })
    }catch(err){
        next(err);
    }
};

