const express = require('express');
const router = express.Router();
const { getReviewsByPerfumeId, createReview } = require('../controllers/reviewController');

router.get('/:id', getReviewsByPerfumeId);
router.post('/:id', createReview);

module.exports = router;
