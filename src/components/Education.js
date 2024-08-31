import React from 'react';
import '../css/Education.css'; // Import the CSS file
import Edureka from '../Assets/edureka.png';
import Certificate from '../Assets/certificate2.jpeg'
function Education() {
  return (
    <div className="education-container">
      <h1 className="education-title">My Education</h1>
      <div className='education-subcontainer'> 
      <div className="education-item">
        <h2 className="degree">Bachelor of Technology-Information Technology</h2>
        <p className="institution">Anna University, Coimbatore, India</p>
        <p className="year">2010 - 2024</p>
        <p className="cgpa">CGPA-<span style={{color:'#DA0C81'}}>8.1</span></p>
      </div>

      <div className="skills">
      <h2 className="section-title">Skills</h2>
        <ul className="skills-list">
        <li>HTML - <span style={{color:'#DA0C81'}}>Advanced</span></li>
          <li>CSS -  <span style={{color:'#DA0C81'}}>Advanced</span></li>
          <li>JavaScript -  <span style={{color:'#4CAF50'}}>Intermediate</span></li>
          <li>Data Structures -  <span style={{color:'#4CAF50'}}>Intermediate</span></li>
          <li>Node.js -  <span style={{color:'#4CAF50'}}>Intermediate</span></li>
          <li>Express.js -  <span style={{color:'#4CAF50'}}>Intermediate</span></li>
          <li>React.js -  <span style={{color:'#4CAF50'}}>Intermediate</span></li>
          <li>MongoDB -  <span style={{color:'#4CAF50'}}>Intermediate</span></li>
          <li>Java -  <span style={{color:'#4CAF50'}}>Intermediate</span></li>
          <li>C Programming -  <span style={{color:'#DA0C81'}}>Advanced</span></li>
        </ul>
      </div></div>

      <h2 className="section-title">Certifications</h2>
      <div className="certifications">
        <div className='education-item'>
          <img src={Edureka} alt="img not found" className='certificate-image'/>
          <h4 className='course'>Full stack webdevelopment</h4>
          <p className='course-content'>I have completed the six months course at edureka.</p>
        </div>
        <div className='skills'>
          <img src={Certificate} alt="img not found"className='certificate-image2'/>
          <h4 className='course2'>Certificate of participation</h4>
          <p className='course-content'>Placement Preparation programme in Indian Institute Of Placement.</p>
        </div>
        
      </div>
    </div>
  );
}

export default Education;
