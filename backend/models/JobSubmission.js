const mongoose = require('mongoose');

const JobSubmissionSchema = new mongoose.Schema({
  job_title: { type: String, required: true },
  description: { type: String, required: true },
  skills: { type: [String], required: true },
  esco_classification: { type: Boolean, default: false },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  submitted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  submission_date: { type: Date, default: Date.now },
  source: { type: String, default: 'manual' }
});

module.exports = mongoose.model('JobSubmission', JobSubmissionSchema);
