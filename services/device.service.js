const db=require('../config/db.config');
exports.deviceRegister=(data,callback)=>{
  
    db.query('insert into deviceRegister (activate,status,refill,access) values(?,?,?,?)',
    [data.activate,data.status,data.refill,data.access],(err,result,fields)=>{
            callback(err,result);
    }
    );
};

exports.deviceInfo=(data,callback)=>{
db.query('insert into deviceInfo (location,vendRow,vendColumn,address,fVendId) values(?,?,?,?,?)',
[data.location,data.vendRow,data.vendColumn,data.address,data.fVendId],
(err,result,fields)=>{
    callback(err,result);
});
}

exports.deviceStock=(data,callback)=>{
    db.query('insert into deviceStorage (productName,stock,maxStock,fVendId) values(?,?,?,?)',
    [data.productName,data.stock,data.maxStock,data.fVendId],
    (err,result,fields)=>{
        callback(err,result);
    })
}
