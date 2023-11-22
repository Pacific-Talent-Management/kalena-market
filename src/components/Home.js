import React from 'react';
import AuthService from '../services/auth.service';
import "./Home.css"

const Home = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
      <div className = "home-contents">
        <div className="header">
          <div className='wrapl'>
            <img src="/images/soldiers/230702-A-GS113-011.jpg" height="350px" margin-bottom="50px"></img>
          </div>
            <img src="/images/9thMSC-1.png" height="250px"></img>
            <button className="critical-vac">CRITICAL VACANCIES</button>
        </div>
        <div className="main">
          <p className="main-left">Kalena Market is a dynamic platform where individuals nuture and showcase their unique skills and talents. Join us on a journey where your skills and ambitions meet endless possibilities. Find your path, connect with like-minded individuals, and unlock the full potential of your talents at Kalena Market.</p>
          <img src="/images/soldiers/_DSC1757.jpg" height="275px" className="main-left-carousel"></img>

        </div>
      </div>
        
        
    );
};

export default Home;