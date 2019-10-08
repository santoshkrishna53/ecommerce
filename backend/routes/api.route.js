const express = require('express');
const app = express();
const apiroute = express.Router();
const products = require('../models/product')
var User = require('../models/User');

apiroute.route('/prod').post((req, res) => {
    products.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          console.log(data)
          res.json(data)
        }
      })
  
})

apiroute.post('/kart',function(req,res,next){findkartitems(req,res);})






async function findkartitems(req,res){
  console.log("indode kart");
  console.log(req.session.email)
  if(req.session.email){
    User.findOne({ email: req.session.email }, function (err, user) {
      if(err){
        return done(err);
      }
      if(user){
        console.log(user)
        var response={
          cart : [],
          message: null
        }
        for(var pro in user.cart){
          console.log(pro);
          products.findOne({ _id: pro}, function(err,product){
            if(err){response.message = err;res.status(201).json(response);}
            if(product){
              response.cart.push(product)
              
            }
          })
        }
        console.log("kart object")
        console.log(response);
        res.status(201).json(response);
      }
    })

  }
  else{
    var response={
      message : "not authenticated",
      kart : null
    }

  }
  

}

module.exports = apiroute;