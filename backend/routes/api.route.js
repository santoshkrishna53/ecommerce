const express = require('express');
const app = express();
const apiroute = express.Router();
const products = require('../models/product')




apiroute.route('/').get((req, res) => {
  
})
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

module.exports = apiroute;