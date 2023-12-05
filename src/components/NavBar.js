import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {

    return (
      <div style={{backgroundColor:"#000000"}}>
        <Navbar data-bs-theme="dark" expand="lg">
          <Container>
            
            <Navbar.Brand href="/home"><img src="/images/usar_logo1_rev_rgb_300ppi.png" width="200px" className="logo" alt='Army Logo'></img></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="justify-content-end">
                <Nav.Link href="/home">HOME</Nav.Link>
                <Nav.Link href="/jobs">JOB OPPORTUNITIES</Nav.Link>
                <Nav.Link href="/resume">RESUME</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/profile">PROFILE</Nav.Link>
                <Nav.Link href="/profile">SIGN OUT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div> 
    );
};

export default NavBar;