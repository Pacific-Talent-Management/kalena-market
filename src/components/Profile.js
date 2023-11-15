import React from 'react';
import AuthService from '../services/auth.service';
import {Link} from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import EditProfileModal from '../components/EditProfileModal.js'
import './Profile.css';

const Profile= () => {
    const currentUser = AuthService.getCurrentUser();

    const name = currentUser.first_name + " " +currentUser.last_name;
    const phone = "(" + currentUser.phone_number.slice(0,3) + ") " + currentUser.phone_number.slice(3,6) + "-" + currentUser.phone_number.slice(6,10);
    const email = currentUser.email;
    let user_rank = currentUser.user_rank;
    let location = currentUser.location;
    let image = currentUser.image;
    if(user_rank == null) {
        user_rank = "edit profile";
    }
    if(location == null) {
        location = "edit profile";
    }
    if(image == null) {
        image = "/images/userProfile.png";
    }
    
    return (
        <div className="profile">

            <div className="left">
                <div className="profile-picture">
                    <img src={image} alt="profile picture" />
                    <Link>Change Picture  <i className="bi bi-file-arrow-up-fill"></i></Link>
                </div>
                <div className="user-data">
                    <p><strong>Name: </strong>{name}</p>
                    <p><strong>Rank: </strong>{user_rank}</p>
                    <p><strong>Location: </strong>{location}</p>
                    <p><strong>Phone Number: </strong>{phone}</p>
                    <p><strong>Email: </strong>{email}</p>
                </div>

                <EditProfileModal id={currentUser.id} location={currentUser.location} rank={currentUser.rank}/>


            </div>

            <div className="right">
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="favorites" title="Favorites">
                        Tab content for favorited vacancies
                    </Tab>
                    <Tab eventKey="applied" title="Applied">
                        Tab content for vacancies applied
                    </Tab>
                    <Tab eventKey="resumes" title="Resumes">
                        Tab content for resumes and related documents
                    </Tab>
                </Tabs>
            </div>




        </div>



);
};

export default Profile;