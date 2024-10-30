import React from "react";
import { FaUser, FaBriefcase, FaSearch, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './LandingPage.css';
import logo from './image.png'; 
import background from './background.png'; 
import EmployerAuthForm from '../SignUpLogin/EmployerAuthForm'; // Adjust the path based on your file structure



function LandingPage() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <header className="App-header">
        {/* Navbar */}
        <nav className="navbar">
          <img src={logo} alt="Skills Navigator" className="logo" />
          <div className="nav-links">
            <Link to="/jobs">Find Jobs</Link>
            <Link to="/freelancer">Job Seekers</Link>
            
            <Link to="/contractor">Employers</Link>
            <Link to="/signin">Sign in</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero-section">
          <h1>Your Pathway to Success</h1>
          <p>Find the best job that matches your skills or hire top talent for your next project.</p>
          <div className="hero-cta">
            <Link to="/jobs" className="cta-button">Browse Jobs</Link>
            <Link to="/freelancer" className="cta-button">Job Seeker/Talent-Sign Up</Link>
            <Link to="/contractor" className="cta-button">Hire Top Talent</Link>
          </div>
        </div>

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <FaUser className="icon" />
              <h3>Create a Profile</h3>
              <p>"Sign up and let our chatbot match your skills with the job market. No certificate? 
                No problem—there’s a job for what you do best!"
              </p>
            </div>
            <div className="step">
              <FaChartLine className="icon" />
              <h3>Brigde The Gap</h3>
              <p>"Discover the skills you need to excel in your career. Worried about gaps? We’ve got you covered!"
              </p>
            </div>
            <div className="step">
              <FaBriefcase className="icon" />
              <h3>Find Jobs or Talent</h3>
              <p>"Use our advanced search to find jobs or top talent. 
                We match skills with the right job titles—no more vague listings!"
              </p>
            </div>
            <div className="step">
              <FaCheckCircle className="icon" />
              <h3>Get Hired or Hire</h3>
              <p>Submit proposals, collaborate, check our jobseeker listings and jobs and grow your career or business.</p>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <div className="searchControl">
        <section className="job-search">
          <h2>Search for Jobs</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search jobs by title, keyword, or company" />
            <button className="search-button"><FaSearch /></button>
          </div>
        </section>
        <section className="job-search">
          <h2>Search for Talents</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search talents by title, keyword, or company" />
            <button className="search-button"><FaSearch /></button>
          </div>
        </section>
        </div>

        {/* Featured Jobs Section */}
        <section className="featured-jobs">
          <h2>Featured Jobs</h2>
          <div className="job-list">
   
    <div className="job-card">
        <h3>Digital Marketer</h3>
        <p>ABC Marketing Agency - Remote</p>
        <p>Ksh 4,000/hr - Part Time</p>
        <Link to="/jobs/3" className="job-cta">Apply Now</Link>
    </div>
    <div className="job-card">
        <h3>Data Entry Clerk</h3>
        <p>Kenya Data Services - Remote</p>
        <p>Ksh 1,500/hr - Casual</p>
        <Link to="/jobs/4" className="job-cta">Apply Now</Link>
    </div>
    <div className="job-card">
        <h3>Sales Executive</h3>
        <p>Superb Sales Ltd - Nairobi</p>
        <p>Ksh 25,000/month - Full Time</p>
        <Link to="/jobs/5" className="job-cta">Apply Now</Link>
    </div>
    <div className="job-card">
        <h3>Plumber</h3>
        <p>QuickFix Services - Nairobi</p>
        <p>Ksh 1,000/hr - Informal</p>
        <Link to="/jobs/6" className="job-cta">Apply Now</Link>
    </div>
    <div className="job-card">
        <h3>Content Writer</h3>
        <p>Creative Minds - Remote</p>
        <p>Ksh 2,500/hr - Freelance</p>
        <Link to="/jobs/7" className="job-cta">Apply Now</Link>
    </div>
    <div className="job-card">
        <h3>Construction Worker</h3>
        <p>BuildWell Contractors - Nairobi</p>
        <p>Ksh 1,800/day - Casual</p>
        <Link to="/jobs/8" className="job-cta">Apply Now</Link>
    </div>
            {/* Add more job cards here */}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>Feature Talents</h2>
          <div className="testimonial-container">
           
            <div class="testimonial">
        <div class="icon">👤</div>
        <h4>Jane Smith</h4>
        <p><strong>Top Skills:</strong> Web Development, JavaScript, React</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
        <p><strong>Charges:</strong> Ksh 3000/hour</p>
    </div>
    
    <div class="testimonial">
        <div class="icon">👤</div>
        <h4>David Kimani</h4>
        <p><strong>Top Skills:</strong> Capentry, Guiterist, Artist</p>
        <p><strong>Location:</strong> Mombasa, Kenya</p>
        <p><strong>Charges:</strong> Ksh 2500/Day</p>
    </div>
    
    <div class="testimonial">
        <div class="icon">👤</div>
        <h4>Fatima Amani</h4>
        <p><strong>Top Skills:</strong> Content Writing, SEO, Marketing</p>
        <p><strong>Location:</strong> Kisumu, Kenya</p>
        <p><strong>Charges:</strong> Ksh 2000/hour</p>
    </div>
    
    <div class="testimonial">
        <div class="icon">👤</div>
        <h4>Peter Mwangi</h4>
        <p><strong>Top Skills:</strong> Welder,Turner, Hawker</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
        <p><strong>Charges:</strong> Ksh 500/hour</p>
    </div>

    <div class="testimonial">
        <div class="icon">👤</div>
        <h4>Aisha Abdi</h4>
        <p><strong>Top Skills:</strong> Cooking, Nanny, HouseKeeper</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
        <p><strong>Charges:</strong> Ksh 1000/Day</p>
    </div>

    <div class="testimonial">
        <div class="icon">👤</div>
        <h4>John Kamau</h4>
        <p><strong>Top Skills:</strong> Digital Marketing, Social Media, Branding</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
        <p><strong>Charges:</strong> Ksh 2800/hour</p>
    </div>

    <div class="testimonial">
        <div class="icon">👤</div>
        <h4>Clara Wanjiru</h4>
        <p><strong>Top Skills:</strong> UI/UX Design, Figma, Sketch</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
        <p><strong>Charges:</strong> Ksh 3200/hour</p>
    </div>

    <div class="testimonial">
        <div class="icon">👤</div>
        <h4>James Mwenda</h4>
        <p><strong>Top Skills:</strong> Shop Keeper, Farmer, Mentor</p>
        <p><strong>Location:</strong> Eldoret, Kenya</p>
        <p><strong>Charges:</strong> Ksh 600/hour</p>
    </div>
            {/* Add more testimonials */}
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <p>Connect, Empower, Grow</p>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="social-media">
            {/* Add icons or links to social media */}
          </div>
        </footer>
      </header>
    </div>
  );
}

export default LandingPage;
