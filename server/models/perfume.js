const mongoose = require('mongoose');

const perfumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  rating: { type: Number, default: 4.5 },
  category: { type: String, default: '' },
  image: String,
  images: [String],
  availableSizes: [String],
});

module.exports = mongoose.model('Perfume', perfumeSchema);