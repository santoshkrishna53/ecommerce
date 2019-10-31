const express = require('express');
const app = express();
const auth = express.Router();
var User = require('../models/User');
var product = require('../models/product')
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

auth.post('/register', function (req, res, next) { adduser(req, res); })
auth.post('/login', loginUnser);
auth.post('/profile', isValidUser, function (req, res, next) { return res.status(200).json(req.user); });
auth.post('/logout', isValidUser, function (req, res, next) { req.logout(); return res.status(200).json({ message: 'Logout Success' }); });
auth.post('/updatekart', isValidUser, updateUser);
auth.post('/billing', isValidUser, BillUser);
auth.post('/UpdateUser', isValidUser, UpdateUser);
auth.post('/UpdatePassword', isValidUser, Update_password);
auth.post('/Updateproductquantity',isValidUser,updateProduct)

async function updateProduct(req,res){
  product.findByIdAndUpdate(req.body._id, { $set: { quantity: (req.body.quantity-1) } }, function (err, doc) {
    if (err) { console.log(err) }
    if (doc) { console.log("updated value");console.log(doc.quantity); res.status(200).json(req.user);}
  })
 

}

async function Update_password(req, res) {
  var userr = req.user
  User.findByIdAndRemove(req.user._id, function (err, doc) {
    if (err) { console.log(err) }
    if (doc) {  }
  })
  var user = new User({
    name: userr.name,
    email: userr.email,
    password: User.hashPassword(req.body.newpassword),
    cart: userr.cart,
    orders: userr.orders
  })
  try {
    doc = await user.save();
    return res.status(201).json(doc);
  }
  catch (err) {
    return res.status(201).json(err);
  }


}



async function UpdateUser(req, res) {

  User.findByIdAndUpdate(req.user._id, { $set: { name: req.body.username, email: req.body.email } }, function (err, doc) {
    if (err) { console.log(err) }
    if (doc) { }
  })
  res.status(200).json(req.user);

}

async function BillUser(req, res) {

  console.log(req.body);
  var order = []
  order = req.user.orders;
  order.push(req.body)
  User.findByIdAndUpdate(req.user._id, { $set: { orders: order } }, function (err, doc) {
    if (err) { console.log(err) }
    if (doc) {
      
    }
  });
  User.findByIdAndUpdate(req.user._id, { $set: { cart: [] } }, function (err, doc) {
    if (err) { console.log(err) }
    if (doc) {
      
    }
  });
  res.status(200).json(req.user);
}
function loginUnser(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function (err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json(req.user);
    });
  })(req, res, next);
}

async function adduser(req, res) {
  var user = new User({
    name: req.body.username,
    email: req.body.email,
    password: User.hashPassword(req.body.password)
  })
  try {
    doc = await user.save();
    return res.status(201).json(doc);
  }
  catch (err) {
    return res.status(201).json(err);
  }
}
function isValidUser(req, res, next) {
  if (req.isAuthenticated()) { next(); }
  else return res.status(401).json({ message: 'Unauthorized Request' });
}

async function updateUser(req, res) {
  // console.log("kart")
  // console.log(req.body);
  
  var id = { _id: req.user._id };
  var update = { $set: req.body };
  // console.log("user id",req.user._id);

  // console.log(req.body[0])
  // kart = req.user.cart;

  // console.log("kart");
  // console.log(kart);
  User.findByIdAndUpdate(req.user._id, { $set: { cart: req.body } }, function (err, doc) {
    if (err) { console.log(err) }
    if (doc) {
      // console.log(doc)
    }
  });
  // console.log("aftre update");
  // console.log(req.user);
  res.status(200).json(req.user);
}

module.exports = auth;