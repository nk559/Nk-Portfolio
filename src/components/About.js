import React from 'react';
import {Link} from 'react-router-dom';
import '../css/About.css';
import Profile from '../Assets/profile.JPG';
function About() {
  return (
    <div>
        <div className='about-section'>
        <div className='left-side'>
            <h1>About me</h1>
            <p>
           <a className='bold'> "I am a dedicated full-stack developer with a passion for creating impactful web applications. My journey began with a deep interest in technology and problem-solving, leading me to complete a full-stack course at Edureka. This educational experience provided me with a robust understanding of both front-end and back-end development"</a>.<br/><br/>

My expertise includes React, Node.js, HTML, CSS, and JavaScript. I have applied these skills in various projects, including a restaurant table booking system, where I focused on designing a seamless and intuitive user interface. This project enhanced my ability to develop functional and visually appealing solutions.<br/><br/>

In another project, I created a restaurant review and recommendation system using React JS. This experience allowed me to implement interactive features and ensure a smooth, responsive user experience. I enjoyed exploring user behavior and preferences, which enriched my problem-solving skills.<br/><br/>

I am also enthusiastic about emerging technologies and data science. Currently, I am working on forecasting mobile usage patterns using community detection algorithms in social networks. This project combines my analytical skills with a keen interest in understanding complex data dynamics.<br/><br/>

Outside of professional development, I am committed to lifelong learning and personal growth. I continually seek opportunities to expand my knowledge and apply new technologies, with the aim of contributing to innovative solutions and making a positive impact in the tech industry.<br/><br/>

            </p>
        </div>
        <div className='right-side'>
        <div className='about-image'>
            <img src={Profile} alt='img not found' className='img'/>
        </div>
        <div className='social-button'>
            <div className='social'>
               <Link to="https://www.linkedin.com/in/nareshkumar-anandan-739189270"> <button className='social-media'>Linked In</button></Link>
                <Link to="https://github.com/nk559"><button className='social-media'> Git hub</button></Link>
                </div>
            <div className='social'>
                <Link to="https://instagram.com/_nk_.7"><button className='social-media'>Instagram</button></Link>
               <Link to="#"> <button className='social-media'>Twitter</button></Link>
                </div>
            </div>
            <div>
                <Link to="/about/education"><button className='education'>Education Details</button></Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About