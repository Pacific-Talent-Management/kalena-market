import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import AuthService from "./services/auth.service";

import Home from './components/Home'
import Login from './components/Login';
import Profile from './components/Profile';
import Registration from './components/Registration'
import Jobs from './components/Jobs';
import Error from './components/Error';


const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("manager"));
      setShowAdminBoard(user.roles.includes("admin"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    window.location.href="/";
  }




  return (
  <div>
    {currentUser ? (  
    <div className='w-100'>
      <Navbar className='bg-black' data-bs-theme="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/home"><img src="/images/usar_logo1_rev_rgb_300ppi.png" width="200px" className="logo" alt='Army Logo'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="navbar justify-content-end">
                <Nav.Link href="/home">HOME</Nav.Link>
                <Nav.Link href="/jobs">JOB OPPORTUNITIES</Nav.Link>
                <Nav.Link href="/resume">RESUME</Nav.Link>

                {showModeratorBoard && (
                  <Nav.Link href="/mod">MANAGER BOARD</Nav.Link>
                )}

                {showAdminBoard && (
                  <Nav.Link href="/admin">ADMIN CONTROLS</Nav.Link>
                )}

                <Nav.Link href="/profile">PROFILE</Nav.Link>
                <Nav.Link onClick={logOut}>SIGN OUT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
    ) : (
    <div>

    </div>
    )}

    <div className="w-100">
      {currentUser ? (
          <Routes>
            <Route path="/error" element={<Error/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
      ):(
          <Routes>
            <Route path="/error" element={<Error/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
          </Routes>
      )}
    </div>

  </div>

  );
};

export default App;
