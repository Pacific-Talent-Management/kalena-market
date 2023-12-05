import React from "react";
import AuthService from "../services/auth.service";
import ImageCarousel from "./ImageCarousel";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from "react-bootstrap";
import Critical from "./Critical";
import "./Home.css";


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
  <div>
    
    <Button
      variant="danger"
      className="fs-2"
      onClick={decoratedOnClick}
    >
      {children}<i className="bi bi-exclamation-circle-fill mx-2 fs-2"></i>
    </Button>
    
    </div>
  );
}

const Home = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="home-contents">
    <Accordion defaultActiveKey="1">
      <div className="header">
        <div className="wrapl">
          <ImageCarousel />
        </div>
        <Row><div><img src="/images/9thMSC-1.png" height="250px"></img></div></Row>
        <Row className="px-5 mt-5"><div><CustomToggle eventKey="0">Critical Vacancies</CustomToggle></div></Row>
        
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
      
      
      	
      	<Accordion.Collapse eventKey="0">
          <Card.Body><Critical /></Card.Body>
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
};

export default Home;
