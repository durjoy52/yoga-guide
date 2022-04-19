import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import github from '../../images/logo/GitHub-Mark .png';
import google from '../../images/logo/Google_logo.png';
const GoogleProvider = new GoogleAuthProvider();
const SocialLogin = () => {
    const navigate = useNavigate()
    const googleSign = () => {
        signInWithPopup(auth, GoogleProvider)
          .then((result) => {
            const user = result.user;
            // ...
            console.log(user);
            navigate('/');
          })
          .catch((error) => {
            // Handle Errors here.
            console.error(error);
          });
      };
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
            <div style={{width:"45%",height:'2px'}} className='bg-info'></div>
            <p className='mt-2 p-2'>Or</p>
            <div style={{width:"45%",height:'2px'}} className='bg-info'></div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div>
                <button onClick={googleSign} className='btn btn-success mb-3'><img width={40} src={google} alt="" /> <span className='px-2'>Google</span></button>
                </div>
                <div>
                <button className='btn btn-primary'><img width={40} src={github} alt="" /> <span className='px-2'>Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;