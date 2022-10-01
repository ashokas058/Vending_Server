const express=require('express');
const app= express();
const bodyParser=require('body-parser');
const userRoutes=require('./routes/user.routes');
const deviceRoute=require('./routes/device.route');
const {Server}=require('socket.io')
var server=require('http').createServer(app).listen(3000,()=>{
    console.log('connected to 3000');
    
});
var io=new Server(server);
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use('/user',userRoutes);
app.use('/device',deviceRoute);
io.on("connection", (socket) => {
   console.log("connected");
  });

 