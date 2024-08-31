//import React, { useEffect } from 'react';
import React,{useState,useEffect} from 'react';
import '../css/Home.css'
import {Link} from 'react-router-dom'
import Profilephoto from '../Assets/profile.JPG'
function Home() {
 
  return (
    <div className='home-section'>
        <div className='profile-photo'>
            <img src={Profilephoto} className='photo-home' alt='not found'/>
        </div>
        <div className='content'>
            <h1 className='nk'>Hi,I'm NK...</h1>
            <p className='nk-para'>A passionate Full Stack Developer with expertise in building robust <span style={{color:'#DA0C81'}}>web applications</span>. I have a strong foundation in <span  style={{color:'#DA0C81'}}>front-end </span >and<span  style={{color:'#DA0C81'}}> back-end</span> technologies, with a keen eye for detail and a commitment to delivering high-quality code.
            </p>
            <div className='user-download'>
              <Link to='/contact'> <button className='get-in-touch'>Get in touch</button></Link>
                <button className='download'>Download CV</button>
            </div>
        </div>
    </div>
  )
}

export default Home