const express = require('express');
const app = express();
const user_route = express.Router();


let User = require('../models/User');

user_route.route('/').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = user_route;