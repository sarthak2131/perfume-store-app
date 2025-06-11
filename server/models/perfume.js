const mongoose = require('mongoose');

const perfumeSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  rating: Number,
  category: String,
  image: String,
  images: [String],
});

module.exports = mongoose.model('Perfume', perfumeSchema);
