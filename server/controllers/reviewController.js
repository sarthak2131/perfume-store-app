const Review = require('../models/review');


exports.getReviewsByPerfumeId = async (req, res) => {
  try {
    const reviews = await Review.find({ perfumeId: req.params.id });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
};


exports.createReview = async (req, res) => {
  try {
    const review = new Review({
      perfumeId: req.params.id,
      username: req.body.username,
      comment: req.body.comment,
      stars: req.body.stars,
    });
    const saved = await review.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Error creating review' });
  }
};
