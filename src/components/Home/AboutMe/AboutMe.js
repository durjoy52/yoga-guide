import React from 'react';
import about from '../../../images/about.jpg';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div className='container mx-auto d-flex gap-4 mt-3'>
            <div>
                <h2 className='text-center text-danger'>About Me</h2>
                <div className='d-flex align-items-center h-100'>
                <p className='fs-3 about-me'>
                    Hey I am Amie,a yoga trainer who can lead you to a healthier min and life with personal attention and professional guidance.
                </p>
                </div>
            </div>
            <div className='about-banner'>
                <img className='img-fluid' src={about} alt="" />
            </div>
        </div>
    );
};

export default AboutMe;