const db=require('../config/db.config');
exports.deviceRegister=(data,callback)=>{
  
    db.query('insert into deviceRegister (vending_regdate,status,refill,access) values(?,?,?,?)',
    [data.vending_regdate,data.status,data.refill,data.access],(err,result,fields)=>{
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
    db.query('insert into deviceStorage (productName,cellNum,stock,maxStock,fVendId) values(?,?,?,?)',
    [data.productName,data.cellNum,data.stock,data.maxStock,data.fVendId],
    (err,result,fields)=>{
        callback(err,result);
    })
}
exports.dbInit=(callback)=>{
    db.query('create table deviceRegister (id int primary key auto_increment,vendingRegdate varchar(50),status int,refill int,access varchar(50))',
    [],(err,result,fields)=>{
            db.query('create table deviceInfo (location varchar(50),address varchar(50),fVendId int)',
            [],(err,result,fields)=>{});
            db.query('create table deviceStorage (productName varchar(50),cellNum int,stock int,maxStock int,fVendId int)',
            [],(err,result,fields)=>{

                callback(err,result);
            }
            );
    });
}
