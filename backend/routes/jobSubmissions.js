const express = require('express');
const router = express.Router();
const JobSubmission = require('../models/JobSubmission');

// POST: Submit a new job description
router.post('/submit-job', async (req, res) => {
  try {
    const { job_title, description, skills, submitted_by } = req.body;
    
    const jobSubmission = new JobSubmission({
      job_title,
      description,
      skills,
      submitted_by
    });

    await jobSubmission.save();
    res.status(201).json({ message: 'Job submission saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Fetch all job submissions
router.get('/job-submissions', async (req, res) => {
  try {
    const jobSubmissions = await JobSubmission.find().populate('submitted_by');
    res.json(jobSubmissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
