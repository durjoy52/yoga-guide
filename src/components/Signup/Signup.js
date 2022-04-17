import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div className='footer-fixed d-flex align-items-center justify-content-center'>
            <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-2" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
  Register
  </Button>
  <p>Already have an account?<Link className='text-primary text-decoration-none pe-auto' to='/login' >Please login</Link></p>
</Form>
        </div>
    );
};

export default Signup;