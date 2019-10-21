const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let product = new Schema({
   name: {
      type: String
   },
   product_id: {
      type: Number
   },
   quantity: {
    type: Number
    },
    description: {
        type: String
     },
     price: {
      type: Number
      },
      Image : {
         type: String
      },
      Category : {
         type: String
      }
}, {
   collection: 'products'
})

module.exports = mongoose.model('products', product)