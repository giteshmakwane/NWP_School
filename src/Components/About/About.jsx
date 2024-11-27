import React from 'react'
import './About.css'
import about_img from '../../assets/gall4.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT SCHOOL</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p><span style={{fontWeight:'1000'}}>New Way Public School, Ranapur</span> is a center of excellence dedicated to shaping young minds and inspiring a lifelong love for learning. Situated in the heart of Ranapur, the school offers a nurturing and inclusive environment where students can grow academically, socially, and emotionally.</p>
                <p>With a dynamic curriculum that blends traditional values and modern teaching methodologies, the school ensures that every child receives a well-rounded education. Experienced and passionate educators are committed to guiding students toward their fullest potential, fostering critical thinking, creativity, and a strong sense of responsibility.</p>
                <p>The campus is designed to support learning in all forms, featuring spacious classrooms, advanced laboratories, a well-stocked library, and facilities for arts and sports. Beyond academics, students engage in a variety of extracurricular activities that encourage self-expression, teamwork, and leadership.</p>
                <p>At New Way Public School, we believe in preparing students not just for exams, but for life. Our values-driven approach aims to cultivate empathy, integrity, and resilience, empowering students to make meaningful contributions to society and achieve their aspirations.</p>
            </div>
        </div>
    )
}

export default About