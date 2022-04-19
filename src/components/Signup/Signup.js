import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
const Signup = () => {
  const navigate =useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [agree, setAgree] = useState(true);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  if (user) {
    console.log(user);
    toast.success('Account created',{id:'created'})
    navigate('/')

  }
  if (error) {
    toast.error(error.message,{id:'error'});
  }
  if (loading) {
    return <Loading />;
  }

  const handleName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="footer-fixed">
      <div className=" d-flex align-items-center justify-content-center mt-5">
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
              onBlur={handleName}
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onClick={() => setAgree(!agree)}
              label="Accept Yoga Guide Terms and Condition."
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={agree}>
            Register
          </Button>
          <p>
            Already have an account?
            <Link
              className="text-primary text-decoration-none pe-auto"
              to="/login"
            >
              Please login
            </Link>
          </p>
        </Form>
      </div>
      <h2 className="text-center my-0">Social Login</h2>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signup;
