const db = require('../config/db.config');

exports.dbInit = (callback) => {
    db.query('create table deviceRegister (id int primary key auto_increment,vendingRegdate varchar(50),status int,refill int,access varchar(50))',
        [], (err, result, fields) => {
            db.query('create table deviceInfo (location varchar(50),address varchar(50),fVendId int)',
                [], (err, result, fields) => { });
            db.query('create table deviceStorage (productName varchar(50),cellNum int,stock int,maxStock int,fVendId int)',
                [], (err, result, fields) => {

                    db.query('create table user(id int primary key auto_increment,username varchar(50),password varchar(50))'
                        , [], (err, result, fields) => {

                            db.query('create table userRoles(userId int ,role varchar(50))'
                                , [], (err, result, fields) => {
                                    callback(err, "Database setup finished");
                                });

                        });

                }
            );




        });
}