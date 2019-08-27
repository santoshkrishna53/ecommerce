const express = require('express');
const app = express();
const user_route = express.Router();
var User = require('../models/User');
var passport = require('passport');
cors = require('cors')






app.use(cors({
  origin: ['http://localhost:4200','http://127.0.0.1:4200/'],
  // credentials: true
}));


user_route.route('/').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

user_route.post('/register',function(req,res,next){
  adduser(req,res);

  

})

user_route.post('/login',function(req,res,next){
  passport.authenticate('passportname', function(err, user, info) {
      if (err) { return res.status(501).json(err); }
      if (!user) { return res.status(501).json(info); }
      req.logIn(user, function(err) {
        if (err) {return res.status(501).json(err); }
        return  res.status(201).json({message: "login Success"})
      });
    

    })(req, res, next);
  });

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

module.exports = user_route;