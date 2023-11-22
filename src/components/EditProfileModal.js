import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";
import UserService from '../services/user.service';
import Accordion from "react-bootstrap/Accordion";
import './EditProfileModal.css';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validFirstName = (value) => {
    // Checks if the first name has at least 1 character
    if (value.length < 1) {
        return (
            <div className = "alert alert-danger" role="alert">
                First name must be at least 1 character long.
            </div>
        );
            
    }
    // Checks if the first name contains any numbers
    if (/[0-9]/.test(value)) {
        return (
            <div className = "alert alert-danger" role="alert">
                First name cannot contain numbers.
            </div>
        );
    }
    // Checks if the first name contains any special characters
    const specialCharacters = ['!','@','#','$','%','^','&','*','(', ')', ',','.','?','"',":","{",'}','|','<','>'];

    for (const char of specialCharacters) {
        if(value.includes(char)) {
            return (
                <div className = "alert alert-danger" role="alert">
                    First name cannot contain special characters.
                </div>
            );
        }
    }

};

const validLastName = (value) => {
    // Checks if the last name has at least 1 character
    if (value.length < 1) {
        return (
            <div className = "alert alert-danger" role="alert">
                First name must be at least 1 character long.
            </div>
        );
            
    }
    // Checks if the last name contains any numbers
    if (/[0-9]/.test(value)) {
        return (
            <div className = "alert alert-danger" role="alert">
                First name cannot contain numbers.
            </div>
        );
    }
    // Checks if the last name contains any special characters
    const specialCharacters = ['!','@','#','$','%','^','&','*','(', ')', ',','.','?','"',":","{",'}','|','<','>'];

    for (const char of specialCharacters) {
        if(value.includes(char)) {
            return (
                <div className = "alert alert-danger" role="alert">
                    First name cannot contain special characters.
                </div>
            );
        }
    }

};

const validPhoneNumber = (value) => {
    // Removes any non-digit characters from the phone number
    const cleanPhoneNumber = value.replace(/\D/g,'');
    // Defines the minimum length of a phone number (including country code and area code)
    const minPhoneNumberLength = 10;
    // Check if the cleaned phone number has a length of 10
    if (cleanPhoneNumber.length < minPhoneNumberLength) {
            return (
                <div className = "alert alert-danger" role="alert">
                    Invalid phone number. Phone number must be at least 10 digits long.
                </div>
            );
        
    } else {
        return null;
    }

};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Not a valid email.
      </div>
    );
  }
  const emailParts = value.split('@');
    const domain = emailParts[1];

    if (domain !== 'army.mil') {
        return(
            <div className ="alert alert-danger" role="alert">
                Only valid Army emails accepted.
            </div>
        )
    }
};

const validPassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};




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
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [phone_number, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [link, setLink] = useState("");
    const [user_rank, setRank] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [match, setMatch] = useState("");
    const [confirmMsg, setConfirmMsg] = useState("")
    const [toggle, setToggle] = useState(false)


    const onChangeFirstname = (e) => {
    	setFirstname(e.target.value);
    }
    const onChangeLastname = (e) => {
    	setLastname(e.target.value);
    }
    const onChangePhonenumber = (e) => {
    	setPhonenumber(e.target.value);
    }
    const onChangeEmail = (e) => {
    	setEmail(e.target.value);
    };
    const onChangeLocation = (e) => {
        setLocation(e.target.value);
    }
    const onChangeRank = (e) => {
        setRank(e.target.value);
    }
    const onChangeLink = (e) => {
        setLink(e.target.value);
    }
    const onChangePassword = (e) => {
        const password = e.target.value.trim();
        setPassword(password);
    };
    const onChangeConfirmPassword = (e) => {
        const confirmpassword = e.target.value.trim();
        if (password !== confirmpassword){
        	setMatch(false);
            setConfirmMsg("Passwords do not match. Re-type password.");
        }else{
            setMatch(true);
            setConfirmMsg("Passwords match.");
            setConfirmPassword(confirmpassword);
        }

    };
    const onChangeToggle = (e) => {
     if(toggle){
        setToggle(false);
        }else{
        setToggle(true);
        }
    };
    const fetchData = async() => {
    
        try{

            const response = AuthService.getCurrentUser();
            let userData = response;
            //console.log(response);
            console.log("User Data " +JSON.stringify(userData));
            
            
            if (userData.first_name !== null) {
                setFirstname(userData.first_name);
            }
            if (userData.last_name !== null) {
                setLastname(userData.last_name);
            }
            if (userData.phone_number !== null) {
                setPhonenumber(userData.phone_number);
            }
            if (userData.email !== null) {
                setEmail(userData.email);
            }
            if (userData.location !== null) {
                setLocation(userData.location);
            }
            if (userData.user_rank !== null) {
                setRank(userData.user_rank);
            }
            if (userData.link!== null) {
                setLink(userData.link);
            }
            if (userData.password!== null) {
                setPassword(userData.password);
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
    

	async function handleSubmit(e){
		e.preventDefault();
		setMessage("");
	    	setSuccessful(false);
	    	
	    	
			console.log(toggle);

		if (checkBtn.current.context._errors.length === 0 && !toggle) {
			
		
		    userData.first_name = first_name;
		    userData.last_name = last_name;
		    userData.phone_number = phone_number;
		    userData.email = email;
		    userData.password = password;
		    userData.location = location;
		    userData.user_rank = user_rank;
		    userData.link = link;
		    localStorage.setItem("user", JSON.stringify(userData));
		    await UserService.updateUser(userData.id, userData).then(
                (response) => {
                  setMessage(response.data.message);
                  setSuccessful(true);
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
		setMessage("Profile Updated");
	    	setSuccessful(true);
			
		}else{
			setMessage("Missing Requirements");
	    		setSuccessful(false);
	    		setMatch(false);
            		setConfirmMsg("Passwords do not match.");
		}

	    }
	    
	    async function closeModal(e){
	    	if (successful == true){
	    		window.location.reload(false);
	    	}else{
	   	 	handleClose();
	   	}
	   	
	   	
	    }
	    
	    

    return (
        <>
        
            <Link onClick={handleShow}>Edit Profile  <i className="bi bi-gear-wide"></i></Link>
	<Form ref={form}>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Edit Profile</Modal.Title>
                    <Button onClick={closeModal} className="closeButton"></Button>
                </Modal.Header>
                <Modal.Body>

                    <div className="editUser">
                    
                    	<div className="right">
		            	<p>First Name*</p>
		                <Input
		                    type="text"
		                    value={first_name}
		                    onChange={onChangeFirstname}
		                    validations={[required, validFirstName]}
		                />
		            	<p>Email*</p>
		                <Input
		                    type="email"
		                    value={email}
		                    onChange={onChangeEmail}
		                    validations={[required, validEmail]}
		                />
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
		                
                    	</div>
                    	
                    	<div className="left">
                    		<p>Last Name*</p>
		                <Input
		                    type="text"
		                    value={last_name}
		                    onChange={onChangeLastname}
		                    validations={[required, validLastName]}
		                />
                    		
		                <p>Phone Number*</p>
		                <Input
		                    type="text"
		                    value={phone_number}
		                    onChange={onChangePhonenumber}
		                    validations={[required, validPhoneNumber]}
		                />
		                <p>Website</p>
		                <Input
		                    type="text"
		                    value={link}
		                    onChange={onChangeLink}
		                />
                    	</div>
                    
                    </div>
                    	
                    
                        

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header onClick={onChangeToggle}>Change Password</Accordion.Header>
                                <Accordion.Body>
                                    <p>Password*</p>
                                    <Input
                                        type="password"
                                        value={password}
                                        onChange={onChangePassword}
                                        validations={[required, validPassword]}
                                    />
                                    <p>Confirm Password*</p>
                                    <Input
                                        type="password"
                                        value={confirmpassword}
                                        onChange={onChangeConfirmPassword}
                                    />
                                    {confirmMsg && (
                                        <div className={match ? "alert alert-success":"alert alert-danger"}role="alert">
                                            {confirmMsg}
                                        </div>
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    
			
                </Modal.Body>
                <Modal.Footer>
                		{message && (
                                        <div className={successful ? "alert alert-success":"alert alert-danger"}role="alert">
                                            {message}
                                        </div>
                        	)}
                            <Button onClick={handleSubmit}>Submit</Button>
                            <Button onClick={closeModal} variant="secondary">Close</Button>
                            <CheckButton style={{display:"none"}}ref={checkBtn}/>
                            
                        </Modal.Footer>

            </Modal>
            </Form>
        </>
    );
}

export default EditProfileModal;
