import React from 'react';
import AuthService from '../services/auth.service';
import "./Home.css"

const Home = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
      <div className = "home-contents">
        <div className="army-bar">
          <strong>{currentUser.first_name} {currentUser.last_name}'s</strong> Homepage
        </div>
        <div className ="side-nav-bar">
          <a href="/home">Home</a>
          <a href="/profile">Profile</a>
          <a href="/home">Job Opportunities</a>
          <a href="/home">Resumes</a>
          <a href="/home">Sign-out</a>
        </div>

      </div>
        
        
    );
};

export default Home;