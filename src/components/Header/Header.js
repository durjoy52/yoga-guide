import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../images/logo/logo.png';
const Header = () => {
  const navigate =useNavigate()
  return (
<Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className="d-flex align-items-center" as={Link} to="/">
    <img src={logo} alt="" />
    <span>YOGA GUIDE</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link href="/home#services" onClick={_=>navigate("/home#services")} >Services</Nav.Link>
      <Nav.Link as={Link} to='/checkout'>Checkout</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
