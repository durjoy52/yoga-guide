import React from 'react';
import about from '../../../images/about.jpg';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div className='container mx-auto d-flex flex-column-reverse flex-md-row gap-3 mt-3'>
            <div>
                <h2 className='text-center'>About Amie</h2>
                <div className='d-flex align-items-center h-100'>
                <p className='fs-3 about-me'>
                    Hey I am Amie,a yoga trainer who can lead you to a healthier min and life with personal attention and professional guidance.
                </p>
                </div>
            </div>
            <div className='about-banner'>
                <div>
                <img className='img-fluid' src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;