const Brief = require('../models/Brief');

exports.getAllBriefs = async (req, res) => {
  try {
    const briefs = await Brief.find().populate('competences');
    res.status(200).json(briefs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBriefById = async (req, res) => {
  try {
    const brief = await Brief.findById(req.params.id).populate('competences');
    if (!brief) return res.status(404).json({ message: 'Brief non trouvé' });
    res.status(200).json(brief);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBrief = async (req, res) => {
  try {
    const { titre, description, competences } = req.body;

    if (!titre || !Array.isArray(competences)) {
      return res.status(400).json({ message: 'Champs requis manquants' });
    }

    const newBrief = new Brief({ titre, description, competences });
    await newBrief.save();
    res.status(201).json(newBrief);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateBrief = async (req, res) => {
  try {
    const updatedBrief = await Brief.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedBrief) return res.status(404).json({ message: 'Brief non trouvé' });
    res.status(200).json(updatedBrief);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBrief = async (req, res) => {
  try {
    const deleted = await Brief.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Brief non trouvé' });
    res.status(200).json({ message: 'Brief supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
