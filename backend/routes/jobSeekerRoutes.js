const express = require('express');
const multer = require('multer');
const JobSeeker = require('../models/jobSeeker');
const authMiddleware = require('../utils/authMiddleware'); 

const router = express.Router();

// Configure Multer for file uploads (e.g., storing in 'uploads/cvs')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/cvs'); // Define where to store CVs
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Define how to name the files
  }
});

const upload = multer({ storage: storage });

// Route to update job seeker profile with CV upload
// router.put('/jobseeker/profile', authMiddleware, upload.single('cv'), async (req, res) => {
//     const userId = req.user._id; // Assuming you have the user ID from authentication middleware
//     const { experience, education, skills, jobSeekerLocation } = req.body;

//     try {
//         // If a file (CV) is uploaded, store the path in the profile
//         const cvPath = req.file ? req.file.path : null;

//         // Update the JobSeeker profile
//         const updatedJobSeeker = await JobSeeker.findByIdAndUpdate(
//             userId,
//             {
//                 $set: {
//                     experience,          // Update experience
//                     education,           // Update education
//                     skills,              // Update skills
//                     jobSeekerLocation,   // Update location
//                     cv: cvPath           // Update CV path if available
//                 }
//             },
//             { new: true } // Return the updated document
//         );

//         res.status(200).json({
//             message: 'Profile updated successfully',
//             updatedJobSeeker
//         });
//     // } catch (err) {
//     //     res.status(500).json({
//     //         message: 'Error updating profile',
//     //         error: err.message
//     //     });
//   } catch (error) {
//     console.error("Error updating jobseeker profile:", error);
//     res.status(500).json({ message: "Internal Server Error", error: error.message });
// }
//     // }
// });

router.put('/jobseeker/profile', authMiddleware, upload.single('cv'), async (req, res) => {
  const userId = req.user._id; // Assuming user ID from authentication middleware
  const { experience, education, skills, jobSeekerLocation } = req.body;
console.log(req.body);
  try {
      const updateData = {};

      // Only set fields that are provided in the request body or file
      if (experience) updateData.experience = experience;
      if (education) updateData.education = education;
      if (skills) updateData.skills = skills;
      if (jobSeekerLocation) updateData.jobSeekerLocation = jobSeekerLocation;
      
      // If a file (CV) is uploaded, include the CV path
      if (req.file) updateData.cv = req.file.path;
       console.log (req.file.path);
      if (Object.keys(updateData).length === 0) {
          return res.status(400).json({ message: "No fields to update." });
      }
console.log(updateData);
      // Update the Job Seeker profile
      const updatedJobSeeker = await JobSeeker.findByIdAndUpdate(
          userId,
          { $set: updateData },
          { new: true } // Return the updated document
      );
console.log(updatedJobSeeker);
      if (!updatedJobSeeker) {
          return res.status(404).json({ message: "Job seeker not found." });
      }

      res.status(200).json({
          message: 'Profile updated successfully',
          updatedJobSeeker
      });
  } catch (error) {
      console.error("Error updating jobseeker profile:", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
