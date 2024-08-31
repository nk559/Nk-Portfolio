import React from 'react';
import '../css/Process.css';
import ProjectObjectives from '../Assets/ProjectObjectives.png';
import Stacktools from '../Assets/Stacktools.png';
import Design from '../Assets/design.png';
import Development from '../Assets/Development.jpg';
import Problemsolving from '../Assets/problemsolving.jpg';
import Deployment from '../Assets/Deployment.jpg';
function Process() {
  return (
    <div className='process-section'>
       <div className='row'>
         <div className='process-box'>
            <img src={ProjectObjectives} alt='img not found' className='process-image'/>
            <h4 className='head'>Project Overview and Objectives </h4>
            <p className='para'>The project focused on solving a specific problem with clearly defined goals. Throughout the process, adjustments were made to ensure that the objectives were met, leading to a successful outcome that aligned with the initial vision.</p>
        </div>
        <div className='process-box'>
            <img src={Stacktools} alt='img not found' className='process-image'/>
            <h4 className='head'>Technology Stack and Tools</h4>
            <p className='para'>Technologies, frameworks, libraries, and tools were carefully selected for their suitability to the project’s needs. Their effectiveness was evaluated, with particular attention to what worked well, the challenges encountered, and how they contributed to the overall success of the project.</p>
        </div>
        <div className='process-box'>
            <img src={Design} alt='img not found' className='process-image'/>
            <h4 className='head'>Design and Architecture</h4>
            <p className='para'> The project followed specific design principles and architectural patterns, emphasizing UI/UX and system structure. An analysis of the design revealed strengths and weaknesses, including trade-offs that impacted functionality and maintainability.</p>
        </div>
        </div>
        <div className='row'>
         <div className='process-box'>
            <img src={Development} alt='img not found' className='process-image'/>
            <h4 className='head'>Development Process and Methodology</h4>
            <p className='para'>The development process was guided by a specific methodology, with clear phases and the use of tools for version control and task management. The chosen approach influenced the project’s timeline, collaboration, and quality, contributing to an efficient and well-organized development cycle.</p>
        </div>
        <div className='process-box'>
            <img src={Problemsolving} alt='img not found' className='process-image'/>
            <h4 className='head'>Challenges and Problem-Solving</h4>
            <p className='para'>Major challenges were identified and addressed through strategic problem-solving. The solutions implemented had a significant impact on the project’s progress, and valuable lessons were learned, contributing to a deeper understanding of the development process.</p>
        </div>
        <div className='process-box'>
            <img src={Deployment} alt='img not found' className='process-image'/>
            <h4 className='head'>Testing, Deployment, and Maintenance</h4>
            <p className='para'>Testing strategies, deployment procedures, and maintenance plans were carefully executed. The effectiveness of these processes was assessed, with a focus on how the project was managed and updated after launch, ensuring its long-term success and reliability.</p>
        </div>
        </div>

    </div>
  )
}

export default Process