const userController=require('../controllers/user.controller');
const tokenInst = require('../config/sec.token');
const express=require('express');
const router=express.Router();
router.post('/register',userController.register);
router.get('/getRoles',tokenInst.vrfyJwtToken,userController.getRole);
router.post('/login',userController.login);

module.exports=router;