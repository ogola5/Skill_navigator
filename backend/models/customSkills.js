const mongoose = require('mongoose');

const CustomSkillSchema = new mongoose.Schema({
  skill_name: { type: String, required: true },
  description: { type: String },
  related_jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobSubmission' }],
  submitted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  submission_date: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }
});

module.exports = mongoose.model('customSkills', CustomSkillSchema);
