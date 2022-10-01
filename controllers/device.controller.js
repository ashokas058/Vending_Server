const deviceService = require('../services/device.service');
const chk = require('../config/form.validator');
const tokenGen=require('../config/sec.token');
exports.register = (req, res, next) => {
    data = {
        activate: chk.check(req.body.activate),
        status: chk.check(req.body.status)
        ,refill: chk.check(req.body.refill),
        aceess: chk.check(req.body.access),
        location: chk.check(req.body.location),
        vendRow: chk.check(req.body.vendRow),
        vendColumn: chk.check(req.body.vendColumn),
        address: chk.check(req.body.address),
        fVendId: 0,
        productName: chk.check(req.body.productName),
        stock: chk.check(req.body.stock),
        maxStock: chk.check(req.body.maxStock),

    };
    deviceService.deviceRegister(data, (err, result) => {
        if (err)
            return res.status(500).send({ success: 0, data: "Registeration failed" });
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