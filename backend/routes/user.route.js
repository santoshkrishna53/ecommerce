const express = require('express');
const app = express();
const user_route = express.Router();
var User = require('../models/User');

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