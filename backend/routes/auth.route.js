const express = require('express');
const app = express();
const auth = express.Router();
var User = require('../models/User');
var passport = require('passport');
cors = require('cors');
var bcrypt = require('bcryptjs');
var sess;
// require('./../passport');
// app.use(passport.initialize());
// app.use(passport.session());
auth.route('/').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

auth.post('/register',function(req,res,next){adduser(req,res);})
auth.post('/login',loginUnser);
auth.post('/profile',isValidUser,function(req,res,next){return res.status(200).json(req.user);});
auth.get('/logout',isValidUser, function(req,res,next){req.logout();return res.status(200).json({message:'Logout Success'});});






function loginUnser(req,res,next){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function(err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json({message:'Login Success'});
    });
  })(req, res, next);

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
catch(err){
    return res.status(201).json(err);
}
}
function isValidUser(req,res,next){
  if(req.isAuthenticated()){next();} 
  else return res.status(401).json({message:'Unauthorized Request'});
}

module.exports = auth;