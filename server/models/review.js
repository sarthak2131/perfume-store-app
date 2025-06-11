const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  perfumeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Perfume',
    required: true,
  },
  username: String,
  comment: String,
  stars: Number,
});

module.exports = mongoose.model('Review', reviewSchema);
