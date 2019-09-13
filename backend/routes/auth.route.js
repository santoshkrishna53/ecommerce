var express = require('express');
var router = express.Router();
var User = require('../models/User');
var session = require('express-session');
const app = express();


module.exports = function(passport){
    router.post('/signup',function(req,res){
        var body = req.body;
        var email = body.username;
        var password = body.password;
        User.findOne({email: email},function(err,doc){
            if(err){res.status(500).send(err)}
            else{
                if(doc){ res.status(500).send("username exists")}
                else{adduser(req,res)}
            }
        })
    })
    
    router.post('/login',passport.authenticate('local',{
        failureRedirect: '/login'
    }),function(req,res){res.send(req.session);})
    router.post('/logout',passport.authenticate('local'),function(req,res){
        req.logout();
        res.send("loggedout");
    })

    router.get('/profile',function(req,res){
        // user = req.session.passport.user;
        console.log("test profile");console.log(req.session);console.log(req.sessionID)
        res.send("test profile response");
        // res.send(req.session);
        // User.findOne({ email: username }, function (err, doc) {
        //     if(err){res.send(err)}
        //     else{
        //         if(doc){
        //             res.send(doc);
        //         }
                
        //     }
        // })
         
     })
     
   

    return router;
}

async function adduser(req,res){
    var user = new User({
      name : req.body.username,
      email : req.body.email,
      password : User.hashPassword(req.body.password)
    })
    try{
      doc = await user.save();
      return res.status(201).json(doc);
    }
    catch(err){return res.status(201).json(err);}
}
