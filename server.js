const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/christie1',function(req,res){
  res.sendFile(path.join(__dirname+'/christie1.xml'));
});

router.get('/christie1.xsl',function(req,res){
  res.sendFile(__dirname+'/christie1.xsl');
});

router.get('/business-data',function(req,res){
  res.sendFile(path.join(__dirname+'/business-data.xml'));
});

router.get('/business-data.xsl',function(req,res){
  res.sendFile(__dirname+'/business-data.xsl');
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
