const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let product = new Schema({
   name: {
      type: String
   },
   id: {
      type: Number
   },
   quantity: {
    type: Number
    },
    description: {
        type: String
     },
     Price: {
      type: Number
      },
      Discount : {
         type: Number
      }
}, {
   collection: 'products'
})

module.exports = mongoose.model('products', product)