const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
