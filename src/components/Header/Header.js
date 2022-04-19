import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import logo from "../../images/logo/logo.png";
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  const [user] =useAuthState(auth)
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          className="d-flex align-items-center"
          as={CustomLink}
          to="/"
        >
          <img src={logo} alt="" />
          <span>YOGA GUIDE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={CustomLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link
              href="/home#services"
              onClick={() => navigate('/home#services')}
            >
              Services
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/checkout">
              Checkout
            </Nav.Link>
          </Nav>
          <Nav>
           {
             user ?<Nav.Link as={Link} to="/login" onClick={() => signOut(auth)}>
             Logout
           </Nav.Link>:<Nav.Link as={CustomLink} to="/login">
                Login
              </Nav.Link>
           }
            <Nav.Link as={CustomLink} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/about">
              AboutMe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
