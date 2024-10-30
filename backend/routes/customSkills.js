const express = require('express');
const router = express.Router();
const customSkills = require('../models/customSkills');

// POST: Submit a new custom skill
router.post('/submit-skill', async (req, res) => {
  try {
    const { skill_name, description, submitted_by } = req.body;

    const customSkills = new customSkills({
      skill_name,
      description,
      submitted_by
    });

    await customSkills.save();
    res.status(201).json({ message: 'Skill submission saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Fetch all custom skills
router.get('/custom-skills', async (req, res) => {
  try {
    const skills = await CustomSkill.find().populate('submitted_by');
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
