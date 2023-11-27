import React from "react";
import AuthService from "../services/auth.service";
import ImageCarousel from "./ImageCarousel";
import "./Home.css";

const Home = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="home-contents">
      <div className="header">
        <div className="wrapl">
          <ImageCarousel />
        </div>
        <img src="/images/9thMSC-1.png" height="250px"></img>
        <button className="critical-vac">CRITICAL VACANCIES</button>
      </div>

      <div className="main">
        <p className="main-left">
          Kalena Market is a dynamic platform where individuals nuture and
          showcase their unique skills and talents. Join us on a journey where
          your skills and ambitions meet endless possibilities. Find your path,
          connect with like-minded individuals, and unlock the full potential of
          your talents at Kalena Market.
        </p>
      </div>
    </div>
  );
};

export default Home;
