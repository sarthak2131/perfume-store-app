const Perfume = require('../models/perfume');

// GET all perfumes
exports.getAllPerfumes = async (req, res) => {
  try {
    const perfumes = await Perfume.find();
    res.json(perfumes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching perfumes' });
  }
};

// GET perfume by ID
exports.getPerfumeById = async (req, res) => {
  try {
    const perfume = await Perfume.findById(req.params.id);
    if (!perfume) return res.status(404).json({ message: 'Perfume not found' });
    res.json(perfume);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching perfume' });
  }
};
