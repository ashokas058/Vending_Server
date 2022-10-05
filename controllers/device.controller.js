const deviceService = require('../services/device.service');
const chk = require('../config/form.validator');
const tokenGen=require('../config/sec.token');
exports.register = (req, res, next) => {
    data = {
        vendingRegdate: chk.check(req.body.vendingRegdate),
        status: chk.check(req.body.status),
        refill: chk.check(req.body.refill),
        fVendId:0,
        access: chk.check(req.body.access),
        location: chk.check(req.body.location),
        address: chk.check(req.body.address)
    }
    deviceService.deviceRegister(data, (err, result) => {
        if (err)
            return res.status(500).send({ success: 0, data: err });
        data.fVendId=result.insertId;
        deviceService.deviceInfo(data,(err,result)=>{
            if(err)
                return res.status(500).send({ success: 0, data:err });
           
        })

    })

}

exports.loadStorage=(req,res,next)=>{
     data={
        cellNum:chk.check(req.body.cellNum),
        productName: chk.check(req.body.productName),
        stock: chk.check(req.body.stock),
        maxStock: chk.check(req.body.maxStock),
        fVendId:chk.check(req.body.fVendId)
     }

     deviceService.deviceStock(data,(err,result)=>{
        if(err)
        return res.status(500).send({ success: 0, data: "Storage update failed" });
        res.status(201).send({success:1,data:data.insertId});
        next();
    })
}

exports.getStorageDetails=(req,res,next)=>{

    data={
        fVendId:chk.check(req.body.fVendId)
    }

    deviceService.getStorageDetails(data,(error,result)=>{

        if(!error)
        return res.status(201).send({sucess:1,data:result});
        res.status(404).send({success:0,data:"machine details not avilable"});
        next();
    })
}

exports.updateStorage=(req,res,next)=>{
    data={
        stock:chk.check(re.body.stock)
    }
    deviceService.updateStorage(data,(error,result)=>{
        if(!error)
        return res.status(200).send({sucess:1,data:"stock updated"});
        res.status(400).send({success:0,data:"bad request"});
        next();
    });
}

