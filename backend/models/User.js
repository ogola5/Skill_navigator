const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'employer', 'job_seeker'], default: 'job_seeker' },
  created_at: { type: Date, default: Date.now },
  submitted_jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobSubmission' }],
  submitted_skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CustomSkill' }]
});

module.exports = mongoose.model('User', UserSchema);
