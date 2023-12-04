import React from "react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
import { Row, Col, Tab, Tabs, ListGroup } from "react-bootstrap";
import EditProfileModal from "../components/EditProfileModal.js";
import ChangePassModal from "../components/ChangePassModal.js";
import Favorites from "../components/Favorites.js";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  const name = currentUser.first_name + " " + currentUser.last_name;
  const phone =
    "(" +
    currentUser.phone_number.slice(0, 3) +
    ") " +
    currentUser.phone_number.slice(3, 6) +
    "-" +
    currentUser.phone_number.slice(6, 10);
  const email = currentUser.email;
  let user_rank = currentUser.user_rank;
  let location = currentUser.location;
  let website = currentUser.link;
  let image = currentUser.image;
  console.log(currentUser.image);
  if (user_rank == null) {
    user_rank = "edit profile";
  }
  if (location == null) {
    location = "edit profile";
  }
  if (image == null) {
    image = "/images/userProfile.png";
  }
  
  if(website) {
  	if(website.slice(0, 8) !== "https://") {
  	website = "https://" + website;
     	}
  }
	
  
 

  return (
    <Row className="p-5 justify-content-center">
      <Col xs={6} md={4}>
        <img
          className="rounded-circle border border-2"
          src={image}
          alt="profile"
          width="250px"
        />

        <ListGroup.Item
          className="d-flex justify-content-end border border-0"
          style={{ width: "250px" }}
        >
          <Link>
            Change Picture <i className="bi bi-file-arrow-up-fill"></i>
          </Link>
        </ListGroup.Item>
        <div className="my-4">
          <p>
            <strong>Name: </strong>
            {name}
          </p>
          <p>
            <strong>Rank: </strong>
            {user_rank}
          </p>
          <p>
            <strong>Location: </strong>
            {location}
          </p>
          <p>
            <strong>Phone Number: </strong>
            {phone}
          </p>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          {website ? (
          	
          	<Link to={website} target="_blank">
              	<strong>Personal Website</strong>
            	</Link>
          	
            
          ) : (
            <Link to={`/error`} target="_blank">
              <strong>Personal Website</strong>
            </Link>
          )}
        </div>

        <ListGroup.Item
          className="d-flex justify-content-end border border-0"
          style={{ width: "250px" }}
        >
          <EditProfileModal />
        </ListGroup.Item>
        <ListGroup.Item
          className="d-flex justify-content-end border border-0"
          style={{ width: "250px" }}
        >
          <ChangePassModal />
        </ListGroup.Item>
      </Col>

      <Col xs={12} md={8} className="fluid">
        <Tabs defaultActiveKey="favorites" id="justify-tab-example" justify>
          <Tab
            className="border border-1 py-4 scrollbar overflow-auto w-100"
            style={{ height: "100vh" }}
            eventKey="favorites"
            title="Favorites"
          >
            <Favorites />
          </Tab>
          <Tab
            className="border border-1 py-4 scrollbar overflow-auto w-100"
            style={{ height: "100vh" }}
            eventKey="applied"
            title="Applied"
          >
            Tab content for vacancies applied
          </Tab>
          <Tab
            className="border border-1 py-4 scrollbar overflow-auto w-100"
            style={{ height: "100vh" }}
            eventKey="resumes"
            title="Resumes"
          >
            Tab content for resumes and related documents
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default Profile;
