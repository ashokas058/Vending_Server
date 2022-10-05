const express=require('express');
const route=express.Router();
const infoController=require('../controllers/info.controller');
route.get('/',infoController.welcome);
route.get('/dbcreate',infoController.DbCreate);

module.exports=route;