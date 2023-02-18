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
  res.sendFile(path.join(__dirname,'../routes/index.html'))
});

///*
    var S_name;
    var S_id;
router.post('/add-Post', async (req, res) => {
  
mongoose.connect(doURI, {useNewUrlParser: true, useUnifiedTopology: true}).then((result) => {
// app.listen(3000);
}).catch((err) => {})

    S_name = req.body.Name;
    S_id = req.body.ST_ID;

    
    const User = new user({
        name: S_name,
        id: S_id
    });

    User.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    })
    
});
//*/


module.exports = router;
