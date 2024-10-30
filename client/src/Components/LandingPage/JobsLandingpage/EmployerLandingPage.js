// import React from 'react';
// import './EmployerLandingPage.css'; 

// const EmployerLandingPage = () => {
//   return (
//     <>
//     <div className="employer-landing-page">
//       <header className="header">
//       <section className="profile-section">
//         <h2>Employer Profile</h2>
//         <div className="profile-details">
//           {/* Replace with dynamic data */}
//           <p>Name: Company ABC</p>
//           <p>Email: contact@companyabc.com</p>
//           <p>Phone: +123456789</p>
//         </div>
//       </section>
//       <h1>Employer Dashboard</h1>
//       <button>Log Out</button>
//       </header>

//       <div className="classfier-section">
//         <div className='one'>
//         <section className="classifier-section">
//         <h2>Search Job Seekers</h2>
//         <select>
//           <option value="">Select Occupation</option>
//           <option value="developer">Developer</option>
//           <option value="designer">Designer</option>
//           <option value="manager">Manager</option>
//           {/* Add more options as needed */}
//         </select>
//       </section>
//       <section className="search-bar-section">
//         <h2>Search by Classifier</h2>
//         <input type="text" placeholder="Search by name, skills, etc." />
//         <div className='results-classifier'>
//       <section className="search-bar-section">
//         <h2>Job titles list</h2>
//         <input type="textarea"  placeholder="Search by name, skills, etc." />
//       </section>
//       <section className="search-bar-section">
//         <h2>Expected Skills list</h2>
//         <input type="textarea"   placeholder="Search by name, skills, etc." />
//       </section>
//       </div>
//       </section>
//       <button>Search Job Seeker Match</button>
//       </div>
      
//       <div className='two'>
//       {/* </div> */}
//       {/* <div className='the-list'> */}
//       <section className="job-seekers-list">
//         <h2>Job Seekers List</h2>
//         <ul>
//           <li>John Doe - Developer</li>
//           <li>Jane Smith - Designer</li>
//           <li>Emily Johnson - Project Manager</li>
//           {/* Replace with dynamic job seeker data */}
//         </ul>
//       </section>

//       <section className="post-job-section">
//         <button className="post-job-button">Post a Job</button>
//       </section>
//       </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default EmployerLandingPage;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './EmployerLandingPage.css'; 

// const EmployerLandingPage = () => {
//   // State for job submission form
//   const [jobTitle, setJobTitle] = useState('');
//   const [jobDescription, setJobDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');

//   // Handle job submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const jobData = {
//       job_title: jobTitle,
//       description: jobDescription,
//       skills: skills.split(',').map(skill => skill.trim())  // Convert comma-separated skills to an array
//     };

//     try {
//       // POST request to submit the job description to the backend
//       const response = await axios.post('http://localhost:5000/api/jobs/submit-job', jobData);
//       setResponseMessage('Job submitted successfully!');
//       // Clear form fields
//       setJobTitle('');
//       setJobDescription('');
//       setSkills('');
//     } catch (error) {
//       console.error('Error submitting job:', error);
//       setResponseMessage('Failed to submit job. Please try again.');
//     }
//   };

//   return (
//     <>
//       <div className="employer-landing-page">
//         <header className="header">
//           <section className="profile-section">
//             <h2>Employer Profile</h2>
//             <div className="profile-details">
//               <p>Name: Company ABC</p>
//               <p>Email: contact@companyabc.com</p>
//               <p>Phone: +123456789</p>
//             </div>
//           </section>
//           <h1>Employer Dashboard</h1>
//           <button>Log Out</button>
//         </header>

//         <div className="classfier-section">
//           <div className='one'>
//             <section className="classifier-section">
//               <h2>Search Job Seekers</h2>
//               <select>
//                 <option value="">Select Occupation</option>
//                 <option value="developer">Developer</option>
//                 <option value="designer">Designer</option>
//                 <option value="manager">Manager</option>
//               </select>
//             </section>
            
//             <section className="search-bar-section">
//               <h2>Search by Classifier</h2>
//               <input type="text" placeholder="Search by name, skills, etc." />
//             </section>

//             <section className="post-job-section">
//               <h2>Post a Job</h2>
//               <form onSubmit={handleSubmit}>
//                 <label>
//                   Job Title:
//                   <input
//                     type="text"
//                     value={jobTitle}
//                     onChange={(e) => setJobTitle(e.target.value)}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Job Description:
//                   <textarea
//                     value={jobDescription}
//                     onChange={(e) => setJobDescription(e.target.value)}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Required Skills (comma-separated):
//                   <input
//                     type="text"
//                     value={skills}
//                     onChange={(e) => setSkills(e.target.value)}
//                     placeholder="e.g., React, Node.js, MongoDB"
//                     required
//                   />
//                 </label>
//                 <button type="submit">Submit Job</button>
//               </form>
//               {responseMessage && <p>{responseMessage}</p>}
//             </section>
//           </div>

//           <div className='two'>
//             <section className="job-seekers-list">
//               <h2>Job Seekers List</h2>
//               <ul>
//                 <li>John Doe - Developer</li>
//                 <li>Jane Smith - Designer</li>
//                 <li>Emily Johnson - Project Manager</li>
//               </ul>
//             </section>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmployerLandingPage;

// import React, { useState } from 'react';
// import './EmployerLandingPage.css'; 

// const EmployerLandingPage = () => {
//   // State for job submission form
//   const [jobTitle, setJobTitle] = useState('');
//   const [jobDescription, setJobDescription] = useState('');
//   const [skills, setSkills] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');
  
//   // State to hold all submitted jobs (simulating a "job database" in JSON format)
//   const [jobs, setJobs] = useState([]);

//   // Handle job submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const jobData = {
//       job_title: jobTitle,
//       description: jobDescription,
//       skills: skills.split(',').map(skill => skill.trim())  // Convert comma-separated skills to an array
//     };

//     // Store job locally in the "jobs" state
//     setJobs([...jobs, jobData]);

//     setResponseMessage('Job submitted successfully!');

//     // Clear form fields
//     setJobTitle('');
//     setJobDescription('');
//     setSkills('');
//   };

//   return (
//     <>
//       <div className="employer-landing-page">
//         <header className="header">
//           <section className="profile-section">
//             <h2>Employer Profile</h2>
//             <div className="profile-details">
//               <p>Name: Company ABC</p>
//               <p>Email: contact@companyabc.com</p>
//               <p>Phone: +123456789</p>
//             </div>
//           </section>
//           <h1>Employer Dashboard</h1>
//           <button>Log Out</button>
//         </header>

//         <div className="classfier-section">
//           <div className='one'>
//             <section className="classifier-section">
//               <h2>Search Job Seekers</h2>
//               <select>
//                 <option value="">Select Occupation</option>
//                 <option value="developer">Developer</option>
//                 <option value="designer">Designer</option>
//                 <option value="manager">Manager</option>
//               </select>
//             </section>
            
//             <section className="search-bar-section">
//               <h2>Search by Classifier</h2>
//               <input type="text" placeholder="Search by name, skills, etc." />
//             </section>

//             <section className="post-job-section">
//               <h2>Post a Job</h2>
//               <form onSubmit={handleSubmit}>
//                 <label>
//                   Job Title:
//                   <input
//                     type="text"
//                     value={jobTitle}
//                     onChange={(e) => setJobTitle(e.target.value)}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Job Description:
//                   <textarea
//                     value={jobDescription}
//                     onChange={(e) => setJobDescription(e.target.value)}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Required Skills (comma-separated):
//                   <input
//                     type="text"
//                     value={skills}
//                     onChange={(e) => setSkills(e.target.value)}
//                     placeholder="e.g., React, Node.js, MongoDB"
//                     required
//                   />
//                 </label>
//                 <button type="submit">Submit Job</button>
//               </form>
//               {responseMessage && <p>{responseMessage}</p>}
//             </section>
//           </div>

//           <div className='two'>
//             <section className="job-seekers-list">
//               <h2>Job Seekers List</h2>
//               <ul>
//                 <li>John Doe - Developer</li>
//                 <li>Jane Smith - Designer</li>
//                 <li>Emily Johnson - Project Manager</li>
//               </ul>
//             </section>

//             <section className="submitted-jobs-list">
//               <h2>Submitted Jobs</h2>
//               <ul>
//                 {jobs.map((job, index) => (
//                   <li key={index}>
//                     <strong>{job.job_title}</strong> - {job.description}
//                     <br />
//                     <em>Skills: {job.skills.join(', ')}</em>
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmployerLandingPage;

import React, { useState } from 'react';
import './EmployerLandingPage.css'; // Importing updated CSS

const EmployerLandingPage = () => {
  // State for job submission form
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  
  // State to hold all submitted jobs (simulating a "job database" in JSON format)
  const [jobs, setJobs] = useState([]);

  // Handle job submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      job_title: jobTitle,
      description: jobDescription,
      skills: skills.split(',').map(skill => skill.trim())  // Convert comma-separated skills to an array
    };

    // Store job locally in the "jobs" state
    setJobs([...jobs, jobData]);

    setResponseMessage('Job submitted successfully!');

    // Clear form fields
    setJobTitle('');
    setJobDescription('');
    setSkills('');
  };

  return (
    <>
      <div className="employer-landing-page">
        <header className="header">
          <section className="profile-section">
            <h2>Employer Profile</h2>
            <div className="profile-details">
              <p><strong>Name:</strong> Company ABC</p>
              <p><strong>Email:</strong> contact@companyabc.com</p>
              <p><strong>Phone:</strong> +123456789</p>
            </div>
          </section>
          <h1 className="dashboard-title">Employer Dashboard</h1>
          <button className="logout-btn">Log Out</button>
        </header>

        <div className="content">
          <div className="left-section">
            <section className="classifier-section">
              <h2>Search Job Seekers</h2>
              <select className="occupation-select">
                <option value="">Select Occupation</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
            </section>
            
            <section className="search-bar-section">
              <h2>Search by Classifier</h2>
              <input type="text" placeholder="Search by name, skills, etc." className="search-input"/>
            </section>

            <section className="post-job-section">
              <h2>Post a Job</h2>
              <form onSubmit={handleSubmit} className="job-form">
                <label>
                  Job Title:
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Job Description:
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Required Skills (comma-separated):
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="e.g., React, Node.js, MongoDB"
                    required
                  />
                </label>
                <button type="submit" className="submit-btn">Submit Job</button>
              </form>
              {responseMessage && <p className="response-message">{responseMessage}</p>}
            </section>
          </div>

          <div className="right-section">
            <section className="job-seekers-list">
              <h2>Job Seekers List</h2>
              <ul>
                <li>John Doe - Developer</li>
                <li>Jane Smith - Designer</li>
                <li>Emily Johnson - Project Manager</li>
              </ul>
            </section>

            <section className="submitted-jobs-list">
              <h2>Submitted Jobs</h2>
              <ul>
                {jobs.map((job, index) => (
                  <li key={index}>
                    <strong>{job.job_title}</strong> - {job.description}
                    <br />
                    <em>Skills: {job.skills.join(', ')}</em>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerLandingPage;
