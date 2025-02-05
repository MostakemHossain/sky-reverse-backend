const info= (req,res)=>{
    return res.json({
        success:true,
        message:"API is available",
        error:{},
        data:{}
    })
}

module.exports={
    info
}