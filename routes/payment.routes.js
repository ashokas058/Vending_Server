const express=require('express');
const route=express.Router();
const paymentController=require('../controllers/payment.controller');

route.post('/savePayment',paymentController.savePayments)
route.get('/getPayments',paymentController.getPaymentDetails);
module.exports=route;