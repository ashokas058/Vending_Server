const jwt=require('jsonwebtoken');
const config=require('./sec.key');
exports.vrfyJwtToken=(req,res,next)=>{
    var token=req.headers['token'];
    if(!token)
        return res.status(404).send({sucess:0,err:'token missing'});
    jwt.verify(token,config.secKey,(error,decoded)=>{
        if(error)
            return res.status(500).send({sucess:0,data:'token expaired'});
    
        req.username=decoded.username;
        next();
    });

    
    
    }

    exports.tokenGenerator=(username)=>{
        return jwt.sign(username,config.secKey,{});
    }