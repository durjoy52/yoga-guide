import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../images/logo/facebook.png';
import google from '../../images/logo/Google_logo.png';
import instagram from '../../images/logo/instagram.png';
const Footer = () => {
    return (
       <>
       <footer className='mt-5 text-center bg-secondary text-white p-3'>
           <div>
           <h4>Contact Us</h4>
           <p >Official:<Link className='text-white' to="#">web@yoga-guide.com</Link></p>
           </div>
           <div>
               <button className='btn btn-secondary'><img width={30} src={facebook} alt="" />Facebook</button>
               <button className='btn btn-secondary'><img width={30} src={google} alt="" />Google</button>
               <button className='btn btn-secondary'><img width={30} src={instagram} alt="" />Instagram</button>
           </div>
       <p><small>&copy;{new Date().getFullYear()} Yoga Guide App -All rights Reserved</small></p>
       </footer>
       </>
    );
};

export default Footer;