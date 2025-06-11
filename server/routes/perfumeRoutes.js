const express = require('express');
const router = express.Router();
const { getAllPerfumes, getPerfumeById } = require('../controllers/perfumeController');

router.get('/', getAllPerfumes);
router.get('/:id', getPerfumeById);

module.exports = router;
