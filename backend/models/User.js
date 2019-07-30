const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let users = new Schema({
   name: {
      type: String
   },
   id: {
      type: Number
   },
   password: {
    type: String
    },
    cart: {
        type: Array
     },
     adresses: {
        type: Array
     }
}, {
   collection: 'users'
})

module.exports = mongoose.model('user', users)