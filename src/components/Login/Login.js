import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase/firebase.init';
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const location = useLocation()
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const from = location.state?.from?.pathname || "/"
    if (user) {
      toast.success('Login successful',{id:'success'})
      navigate(from,{replace:true});
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth
    );
    if(loading || sending){
      return <Loading></Loading>
    };
    if (error) {
      toast.error(error,{id:'error'})
    }
    const resetPassword = async(event) =>{
      const email = event.target.email.value;
      if(email){
        await sendPasswordResetEmail(email)
      toast('Sent email')
      }else{
        toast('please enter your email address')
      }
    }
  const handleEmail = event =>{
    setEmail(event.target.value)
  }
  const handlePassword = event =>{
    setPassword(event.target.value)
  }
  const handleSignIn = event =>{
    event.preventDefault()
    signInWithEmailAndPassword(email,password)
  }
  return (
    <div className="footer-fixed ">
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>
        Forget Password?
        <button
          
          className="btn btn-link text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
        <p>Want to Create a new Account?<Link className='text-decoration-none pe-auto' to='/signup' >Create Account</Link></p>
      </Form>
    </div>
    <h2 className="text-center my-0">Social Login</h2>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
