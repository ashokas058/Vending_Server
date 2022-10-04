const express=require('express');
const tokenInst = require('../config/sec.token');
const deviceController=require('../controllers/device.controller');
const route=express.Router();
route.post('/register',tokenInst.tokenGenerator,deviceController.register);
route.get('/dbcreate',deviceController.DbCreate);

module.exports=route;

