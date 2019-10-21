const express = require('express');
const app = express();
const apiroute = express.Router();
const products = require('../models/product')
var User = require('../models/User');
const image2base64 = require('image-to-base64');

apiroute.route('/prod').post((req, res) => {
    products.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          // console.log(data)
          res.json(data)
        }
      })
  
})
apiroute.route('/addproduct').post((req, res) => {
  
  imageyo64(req,res);
 

})

apiroute.post('/kart',function(req,res,next){findkartitems(req,res);})


async function imageyo64(req,res){
  image2base64(req.body.Image)
    .then(
        (response) => {
            let im = "data:image/jpeg;base64,"
            im = im+response
            addpro(req,res,im);
        }
    )
    .catch(
        (error) => {
            console.log(error); 
        }
    )

}

async function addpro(req,res,Image){
  console.log("image conversion doned");
  // console.log(Image);
  var product = new products({
    name : req.body.name,
    product_id : req.body.email,
    quantity: req.body.quantity,
    description: req.body.description,
    price: req.body.Price,
    Image: Image,
    Category: req.body.Category,
    
})
try{
    doc = await product.save();
    console.log("Added")
    return res.status(200).json();
}
catch(err){
    return res.status(201).json(err);
}
}


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