const db=require('../config/db.config');
exports.deviceRegister=(data,callback)=>{
  
    db.query('insert into deviceRegister (vendingRegdate,status,refill,access) values(?,?,?,?)',
    [data.vendingRegdate,data.status,data.refill,data.access],(err,result,fields)=>{
            callback(err,result);
    }
    );
};

exports.deviceInfo=(data,callback)=>{
db.query('insert into deviceInfo (location,address,fVendId) values(?,?,?)',
[data.location,data.address,data.fVendId],
(err,result,fields)=>{
    callback(err,result);
});
}

exports.deviceStock=(data,callback)=>{
    db.query('insert into deviceStorage (productName,cellNum,stock,maxStock,fVendId) values(?,?,?,?,?)',
    [data.productName,data.cellNum,data.stock,data.maxStock,data.fVendId],
    (err,result,fields)=>{
        callback(err,result);
    })
}


exports.getStorageDetails=(data,callback)=>{
db.query('select * from deviceStorage where fVendId=?'
,[data.fVendId],(err,result,fields)=>{
    callback(err,result);
})
}

exports.updateStorage=(data,callback)=>{
   
    db.query('update deviceStorage set stock=? where fVendId=?',[data.stock,data.fVendId],
    (err,result,fields)=>{

        callback(err,result);
    });
}

