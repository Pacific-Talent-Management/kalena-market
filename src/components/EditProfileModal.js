import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";
import UserService from '../services/user.service';

function EditProfileModal(props) {
    //Modal variables
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 

    //Form variables
    const form = useRef();
    const checkBtn = useRef();
    let navigate = useNavigate();

    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState("");
    const [user_rank, setRank] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    async function handleRegister(e){
        userData.location = location;
        userData.user_rank = user_rank;
        console.log("User data:" + userData);
        localStorage.setItem("user", JSON.stringify(userData));
        await UserService.updateUser(userData.id, userData);
    }
    const onChangeLocation = (e) => {
        setLocation(e.target.value);
    }
    const onChangeRank = (e) => {
        setRank(e.target.value);
    }
    const fetchData = async() => {
        try{
            const response = AuthService.getCurrentUser();
            let userData = response;
            //console.log(response);
            //console.log("User Data " +JSON.stringify(userData));
            
/*
            if (userData.location === null){
                userData.location = "";
            }
            if (userData.user_rank === null){
                userData.user_rank = "";
            }
*/
            if (userData.location !== null) {
                setLocation(userData.location);
            }
            if (userData.user_rank !== null) {
                setRank(userData.user_rank);
            }
            setUserData(userData);
        }
        catch (err) {
            console.error("Error fetching user profile data:", err);
            setError(err);
        }
    }
    useEffect(() => {
        fetchData();
    },[])
    

    /*
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.update(location, rank).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                    navigate("/profile");
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );

        }
        */


    return (
        <>
            <Link onClick={handleShow}>Edit Profile  <i className="bi bi-gear-wide"></i></Link>

            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form ref={form}>
                        <p>Location</p>
                        <Input
                            type="text"
                            value={location}
                            onChange={onChangeLocation}
                        />
                        <p>Rank</p>
                        <Input
                            type="text"
                            value={user_rank}
                            onChange={onChangeRank}
                        />
                        <button onClick={handleRegister}>Submit</button>
                        {message && (
                            <div className={successful ? "alert alert-success":"alert alert-danger"}role="alert">
                                {message}
                            </div>
                        )}
                        <CheckButton style={{display:"none"}}ref={checkBtn}/>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditProfileModal;