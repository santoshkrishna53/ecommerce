const express = require('express');
const app = express();
const user_route = express.Router();
var User = require('../models/User');
var passport = require('passport');
cors = require('cors');
var bcrypt = require('bcryptjs');






app.use(cors({
  origin: ['http://localhost:4200','http://127.0.0.1:4200/'],
  // credentials: true
}));

var sess;


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

user_route.post('/login',(req,res) => {

  console.log(req.body.username);
  User.findOne({ email: req.body.username }, function (err, user) {
    var response = {
      message: ""
    }
    if (err) { return done(err); }
    if (!user) {
      
      response.message = "no user"
      res.status(201).json(response)
      console.log("wrong username");
    }
    if(!bcrypt.compareSync(req.body.password,user.password)) {
        console.log("wrong password");
        response.message = "wrong password";
        res.status(201).json(response)
        
    }
    else{
      console.log("logined");
      sess = req.session;
      sess.email = req.body.username;
      response.message = "logined";
      res.status(201).json(user)
    }
     
     

    
    
    
    
  });




  
  
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