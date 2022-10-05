const express=require('express');
const tokenInst = require('../config/sec.token');
const deviceController=require('../controllers/device.controller');
const router = require('./user.routes');
const route=express.Router();
route.post('/register',tokenInst.vrfyJwtToken,deviceController.register);
route.get('/getStorageDetails',deviceController.getStorageDetails);
router.post('/updateStorage',deviceController.updateStorage)
route.post('/loadStorage',deviceController.loadStorage);


module.exports=route;

