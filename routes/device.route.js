const express=require('express');
const deviceController=require('../controllers/device.controller');
const route=express.Router();
route.post('/register',deviceController.register);

module.exports=route;

