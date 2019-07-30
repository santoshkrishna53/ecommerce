const express = require('express');
const app = express();
const employeeRoute = express.Router();

// Employee model
let Employee = require('../models/Employee');

// Add Employee


// Get All Employees
employeeRoute.route('/').get((req, res) => {
  Employee.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee



// Update employee


// Delete employee


module.exports = employeeRoute;