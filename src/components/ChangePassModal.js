import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import AuthService from "../services/auth.service";
import UserService from '../services/user.service'
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

const validPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};


function ChangePassModal(props) {
    //Modal variables
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 

    //Form variables
    const form = useRef();
    const checkBtn = useRef();

    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [match, setMatch] = useState(false);
    const [confirmMsg, setConfirmMsg] = useState("");

    const onChangePassword = (e) => {
        const password = e.target.value.trim();
        setPassword(password);
        setConfirmPassword("");
        setMatch(false);
    	setConfirmMsg("");
    };
    
    const onChangeConfirmPassword = (e) => {
    	const confirmpassword = e.target.value.trim();
    	setConfirmPassword(confirmpassword);
    	if (password !== confirmpassword) {
    	    setMatch(false);
    	    setConfirmMsg("Passwords do not match. Re-type password.");
    	}else{
    	    setMatch(true);
    	    setConfirmMsg("Passwords match.");
    	}
    };

    const fetchData = async() => {
    
        try{

            const response = AuthService.getCurrentUser();
            let userData = response;
            //console.log(response);
            console.log("User Data " +JSON.stringify(userData));
            setPassword(userData.password);
            setUserData(userData);

        }
        catch (err) {
            console.error("Error fetching user profile data:", err);
            setError(err);
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    },[])
    

	async function handleSubmit(e){
		e.preventDefault();
		setMessage("");
	    	setSuccessful(false);


		if (checkBtn.current.context._errors.length === 0 && password === confirmpassword) {

		    userData.password = password;
		    localStorage.setItem("user", JSON.stringify(userData));
		    await UserService.updatePass(userData.id, userData).then(
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
			setMessage("Change Password Successful");
	    		setSuccessful(true);
			
		}else{
			setMessage("Change Password Failed");
	    		setSuccessful(false);
		}

	    }
	    
	    async function closeModal(e){
	    	if (successful === true){
	    		window.location.reload(false);
	    	}else{
	   	 	handleClose();
	   	}
	   	
	   	
	    }
	    

    return (
        <>
        
            <Link onClick={handleShow}>Change Password <i className="bi bi-gear-wide"></i></Link>
	<Form ref={form}>
            <Modal
                size="md"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Change Password</Modal.Title>
                    <Button onClick={closeModal} className="closeButton"></Button>
                </Modal.Header>
                <Modal.Body>

                    <div className="changePass">
                    
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
                                        validations={[required]}
                                    />
                                    {confirmMsg && (
                                        <div className={match ? "alert alert-success":"alert alert-danger"}role="alert">
                                            {confirmMsg}
                                        </div>
                        	    )}
                                    
                    </div>
	
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

export default ChangePassModal;
