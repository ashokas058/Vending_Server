const express=require('express');
const tokenInst = require('../config/sec.token');
const deviceController=require('../controllers/device.controller');
const route=express.Router();
route.post('/register',tokenInst.vrfyJwtToken,deviceController.register);

module.exports=route;

