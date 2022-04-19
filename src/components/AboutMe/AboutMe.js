import React from 'react';
import myImg from '../../images/myImg.jpg';
const AboutMe = () => {
    return (
        <div className='footer-fixed container mx-auto d-flex gap-2 align-items-center'>
            <img className='mt-2 rounded' style={{width:'22rem',boxShadow:'-15px 15px 0 blueViolet'}} src={myImg} alt="" />
            <p className='fs-3'>I want to be a full-stack developer. Next 3 months
I will learn everything that needs to know to become a complete web developer. Then I will try for a job in the country or abroad</p>
        </div>
    );
};

export default AboutMe;