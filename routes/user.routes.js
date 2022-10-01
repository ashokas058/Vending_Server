const userController=require('../controllers/user.controller');
const express=require('express');
const router=express.Router();
router.post('/register',userController.register);
router.get('/getRoles',userController.getRole);
router.post('/login',userController.login);

module.exports=router;