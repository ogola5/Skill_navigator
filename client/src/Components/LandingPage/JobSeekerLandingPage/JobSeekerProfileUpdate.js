import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobSeekerProfileUpdate = () => {
  const [profile, setProfile] = useState({
    experience: [],
    education: [],
    skills: [],
    location: '',
    profileImage: '',
  });

  const [cvFile, setCvFile] = useState(null); // State to handle CV file upload
  const [message, setMessage] = useState('');

  // Fetch jobseeker profile data when the component mounts
  useEffect(() => {
    // Assuming the token is stored in localStorage after login
    const token = localStorage.getItem('token');
    console.log('Token at component mount:', token); // Debug token at component mount
    
    if (token) {
      axios.get('/jobseeker/profile', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setProfile(response.data.profile);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });
    }
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle CV file change
  const handleCvChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('experience', profile.experience || '');
    formData.append('education', profile.education || '');
    formData.append('skills', profile.skills || '');
    formData.append('jobSeekerLocation', profile.jobSeekerLocation || '');

    if (profile.profileImage) {
      formData.append('profileImage', profile.profileImage);
    }

    if (cvFile) {
      formData.append('cv', cvFile);
    }

    try {
      const token = localStorage.getItem('token');
      console.log('Token at form submission:', token); // Debug token before the API call
      
      if (!token) {
        setMessage('No token found. Please log in.');
        return;
      }

      const response = await axios.put('api/jobseeker/profile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      setMessage('Profile updated successfully!');
    } catch (error) {
      console.error('Error during profile update:', error); // Log the error for debugging
      setMessage('Error updating profile: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="profile-update">
      <h2>Update Job Seeker Profile</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        
        <div>
          <label>Experience:</label>
          <textarea
            name="experience"
            value={JSON.stringify(profile.experience)} // Convert array to string for editing
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Education:</label>
          <textarea
            name="education"
            value={JSON.stringify(profile.education)} // Convert array to string for editing
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Skills:</label>
          <input
            type="text"
            name="skills"
            value={profile.skills.join(',')} // Convert skills array to a comma-separated string
            onChange={(e) => handleInputChange({ target: { name: 'skills', value: e.target.value.split(',') } })}
          />
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Profile Image URL:</label>
          <input
            type="text"
            name="profileImage"
            value={profile.profileImage}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Upload CV (PDF only):</label>
          <input
            type="file"
            name="cv"
            accept=".pdf"
            onChange={handleCvChange}
          />
        </div>

        <button type="submit">Update Profile</button>
      </form>
      
      {message && <p>{message}</p>}
    </div>
  );
};

export default JobSeekerProfileUpdate;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const JobSeekerProfileUpdate = () => {
//   const [profile, setProfile] = useState({
//     experience: '',
//     education: '',
//     skills: '',
//     jobSeekerLocation: '',
//     profileImage: '',
//   });

//   const [cvFile, setCvFile] = useState(null);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios.get('/api/jobseeker/profile', {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(response => {
//         setProfile(response.data.profile);
//       })
//       .catch(error => {
//         console.error('Error fetching profile:', error);
//       });
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }));
//   };

//   const handleCvChange = (e) => {
//     setCvFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('experience', profile.experience || '');
//     formData.append('education', profile.education || '');
//     formData.append('skills', profile.skills || '');
//     formData.append('jobSeekerLocation', profile.jobSeekerLocation || '');

//     if (profile.profileImage) {
//       formData.append('profileImage', profile.profileImage);
//     }

//     if (cvFile) {
//       formData.append('cv', cvFile);
//     }

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setMessage('No token found. Please log in.');
//         return;
//       }

//       const response = await axios.put('/api/jobseeker/profile', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
      
//       setMessage('Profile updated successfully!');
//     } catch (error) {
//       console.error('Error during profile update:', error);
//       setMessage('Error updating profile: ' + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <div className="profile-update">
//       <h2>Update Job Seeker Profile</h2>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
        
//         <div>
//           <label>Experience:</label>
//           <textarea
//             name="experience"
//             value={profile.experience}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label>Education:</label>
//           <textarea
//             name="education"
//             value={profile.education}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label>Skills:</label>
//           <input
//             type="text"
//             name="skills"
//             value={profile.skills}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label>Location:</label>
//           <input
//             type="text"
//             name="jobSeekerLocation"
//             value={profile.jobSeekerLocation}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label>Profile Image URL:</label>
//           <input
//             type="text"
//             name="profileImage"
//             value={profile.profileImage}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label>Upload CV (PDF only):</label>
//           <input
//             type="file"
//             name="cv"
//             accept=".pdf"
//             onChange={handleCvChange}
//           />
//         </div>

//         <button type="submit">Update Profile</button>
//       </form>
      
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default JobSeekerProfileUpdate;
