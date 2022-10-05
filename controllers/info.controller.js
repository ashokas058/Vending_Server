const infoService=require('../services/info.service');


exports.welcome=(req,res,next)=>{

    return res.status(201).send({message:"Welcom to Vending Machine server"});
}


exports.DbCreate=(req,res,next)=>{
    infoService.dbInit((err,result)=>{
        if(!err){
            return res.status(200).send({success:1,data:result});
           
        }
        else
        return res.status(500).send({success:0,data:err});

       
    });
    
    
        }
