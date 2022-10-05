const deviceService = require('../services/device.service');
const chk = require('../config/form.validator');
const tokenGen=require('../config/sec.token');
exports.register = (req, res, next) => {
    data = {
        vendingRegdate: chk.check(req.body.vendingRegdate),
        status: chk.check(req.body.status),
        cellNum:chk.check(req.body.cellNum),
        refill: chk.check(req.body.refill),
        access: chk.check(req.body.access),
        location: chk.check(req.body.location),
        address: chk.check(req.body.address),
        fVendId: 0,
        productName: chk.check(req.body.productName),
        stock: chk.check(req.body.stock),
        maxStock: chk.check(req.body.maxStock),

    };
    deviceService.deviceRegister(data, (err, result) => {
        if (err)
            return res.status(500).send({ success: 0, data: err });
        data.fVendId=result.insertId;
        deviceService.deviceInfo(data,(err,result)=>{
            if(err)
                return res.status(500).send({ success: 0, data:err });
            deviceService.deviceStock(data,(err,result)=>{
                if(err)
                return res.status(500).send({ success: 0, data: "Information update failed" });
                res.status(201).send({success:1,data:data.insertId});
                next();
            })
        });

    });



}