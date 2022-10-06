const chk=require('../config/form.validator');
const paymentService=require('../services/payment.service');

exports.savePayments=(req,res,next)=>{

data={
    amount:chk.check(req.body.amount),
    pDate:chk.check(req.body.pDate),
    fVendId:chk.check(req.body.fVendId),
    
}
paymentService.savePayment(data,(err,result)=>{
    if(!err)
        return res.status(201).send({success:1,data:"payment details added"});
        res.status(503).send({success:0,data:"service not avilable"});
        next();
})
}

exports.getPaymentDetails=(req,res,next)=>{

    data={
        fVendId:chk.check(req.body.fVendId)
    }
    console.log(req.body.fVendId);
    paymentService.getPayments(data,(err,result)=>{
        if(!err)
        return res.status(200).send({success:1,data:result});
        res.status(404).send({success:0,data:"not listed"});
        next();
    })
}