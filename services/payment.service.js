const db=require('../config/db.config');

exports.savePayment=(data,callback)=>{

db.query('insert into payment(pDate,amount,fVendId) values(?,?,?)',
[data.pDate,data.amount,data.fVendId],
(err,result,fields)=>{
    callback(err,result);
})

}

exports.getPayments=(data,callback)=>{
    db.query('select * from payment where fVendId=?',[data.fVendId],
    (err,result)=>{
        callback(err,result);
    })
}