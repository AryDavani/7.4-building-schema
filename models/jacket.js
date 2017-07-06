const mongoose = require('mongoose');


//defining schema
const jacketSchema = new mongoose.Schema({
  style: String,
  brand: { type: String, required: true },
  color: [String],
  materials: [{ fabricType: String, percentage: Number }],
});


//compile schema into model
const Jacket = mongoose.model('Jacket', jacketSchema);

module.exports = Jacket;
