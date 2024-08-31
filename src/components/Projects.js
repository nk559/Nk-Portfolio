import React from 'react'
import  '../css/Project.css'
import Restaurantimage from '../Assets/restaurant.jpg'
import communityimage from '../Assets/community.jpg'
import zomatoimage from '../Assets/zomatoimage.jpg'
function Projects() {
  return (
    <div className='container'>
        <div className='sub-container'>
            <div className='project-image'>
            <img src={Restaurantimage} alt='Not found' className='img-pro'/>
            </div>
            <div className='content'>
                <h3>Restaurant table booking</h3>
                <p className='para-content'>
                This project is a web-based application designed for restaurant table reservations. It allows users to view available tables, select their preferred time slot, and confirm their booking using a user-friendly interface built with HTML, CSS, and JavaScript. The system provides real-time updates and a smooth booking experience without backend integration.
                </p>
            </div>
        </div>
        <div className='sub-container'>
            <div className='project-image' >
            <img src={communityimage} alt='Not found' className='img-pro'/>
            </div>
            <div className='content'>
                <h3>Forecasting mobile using community detection in social network</h3>
                <p className='para-content'>
                This project uses community detection in social networks to predict mobile usage patterns. It identifies user groups and trends to forecast future behaviors and interactions.
                </p>
            </div>
        </div>
        <div className='sub-container'>
            <div className='project-image' >
            <img src={zomatoimage} alt='Not found' className='img-pro'/>
            </div>
            <div className='content'>
                <h3>Responsive Zomato Project in Edureka</h3>
                <p className='para-content'>
                In this project, I built a restaurant review and recommendation system using React JS. It features dynamic search, filtering, and review functionalities, allowing users to interact with an intuitive and responsive interface for discovering and evaluating restaurants.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Projects