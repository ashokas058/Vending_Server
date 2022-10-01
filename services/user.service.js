const e = require('express');
const db=require('../config/db.config');
exports.register=(data,callback)=>{

    db.query('insert into user(username,password) values(?,?)',
    [data.username,data.password],(err,result,fields)=>{
            if(err)
            callback(err);
            else
            {
                callback(null,result);
                
            }
    
    });

};
exports.createRoles=(data,callback)=>{
  db.query('insert into userRoles (userId,role) values(?,?)',[data.userId,data.role],(err,result,fields)=>{
    if(err)
    callback(err);
    else
    callback(result);
  });

};

exports.getRole=(data,callback)=>{
db.query('select * from user where username=?',[data.username],(err,result,fields)=>{
        if(err)
            callback(err);
        else
         callback(null,result);
         
});
};

exports.getUserDetails=(data,callback)=>{
  db.query('select * from user where username=?',[data.username],(err,result,fields)=>{
    if(err)
      callback(err);
    else
    callback(null,result);
  })
}

