const express=require('express');
const bodyParser= require('body-parser');
const cors=require('cors');

const PORT=3000;

//create instance of express
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/',function(req,res){
    res.send("Hello from node server")
});

app.listen(PORT,function(){
    console.log("Server running on port" +PORT)
});

app.post('/enrollment',function(req,res){
    console.log(req.body);
    //call mongo db
    res.status(200).send({"data":"Recieved Successfully"})
})
