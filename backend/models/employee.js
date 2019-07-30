const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let emp = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'emp'
})

module.exports = mongoose.model('emp', emp)