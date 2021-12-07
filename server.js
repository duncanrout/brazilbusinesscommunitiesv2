const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require("jquery")(window);

//Each router sends files to the client browser
//As of now we are sending all of the files to the browser
router.get('/jquery.js',function(req,res){
  res.sendFile(__dirname+'/jquery.js');
});

router.get('/nicepage.js',function(req,res){
  res.sendFile(__dirname+'/nicepage.js');
});

router.get('/test',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
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

router.get('/about',function(req,res){
  res.sendFile(__dirname+'/About.html');
});

router.get('/About.css',function(req,res){
  res.sendFile(__dirname+'/About.css');
});

router.get('/',function(req,res){
  res.sendFile(__dirname+'/Home.html');
});

router.get('/Home.css',function(req,res){
  res.sendFile(__dirname+'/Home.css');
});

router.get('/nicepage.css',function(req,res){
  res.sendFile(__dirname+'/nicepage.css');
});

//I believe we do not need nicepage.js and jquery.js! Kept it here just in case.


router.get('/images/bbc_logo.png',function(req,res){
  res.sendFile(__dirname+'/images/bbc_logo.png');
});

router.get('/images/mag_glass.png',function(req,res){
  res.sendFile(__dirname+'/images/mag_glass.png');
});

router.get('/images/mag_glass.png',function(req,res){
  res.sendFile(__dirname+'/jquery.js');
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
