const express = require("express");
var createError = require('http-errors');
const router = express.Router();
const user = require('../routes/User');
const path = require('path');
const mongoose = require('mongoose');

///*
const doURI = "mongodb+srv://markdb:rasengan@cluster0.ad3usrv.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(doURI, {useNewUrlParser: true, useUnifiedTopology: true}).then((result) => {
// app.listen(3000);
}).catch((err) => {
  res.status(err.status || 500);
})
//*/




router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname,'../routes/index.html'));
  S_name = req.body.Name;
    S_id = req.body.ST_ID;
});

///*
    var S_name;
    var S_id;
router.post('/add-Post', async (req, res) => {
  
  
  /*
    const doURI = "mongodb+srv://markdb:rasengan@cluster0.ad3usrv.mongodb.net/b1?retryWrites=true&w=majority"
    mongoose.connect(doURI, {useNewUrlParser: true, useUnifiedTopology: true}).then((result) => {
    // app.listen(3000);
    }).catch((err) => {})
*/
  
  /*
    const uri = "mongodb+srv://markdb:rasengan@cluster0.ad3usrv.mongodb.net/?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try 
    {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) 
    {
        console.error(e);
    } finally 
    {
        await client.close();
    }
  
  */
  
  ///*
 //   S_name = req.body.Name;
 //   S_id = req.body.ST_ID;

    
    const User = new user({
        name: S_name,
        id: S_id
    });

    User.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    })
    //*/
 
  
  return res.status(200).json({
    
    message: "NAME AND ID REGISTERED",
  });
    
});
//*/


module.exports = router;
