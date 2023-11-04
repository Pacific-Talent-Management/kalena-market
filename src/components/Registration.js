import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

import AuthService from "../services/auth.service";

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


const Registration = () => {
  const form = useRef();
  const checkBtn = useRef();
  let navigate = useNavigate();

  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [phone_number, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeFirstname = (e) => {
    const first_name = e.target.value;
    setFirstname(first_name);
  }
  const onChangeLastname = (e) => {
    const last_name = e.target.value;
    setLastname(last_name);
  }
  const onChangePhonenumber = (e) => {
    const phone_number = e.target.value;
    setPhonenumber(phone_number);
  }
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value.trim();
    setPassword(password);
  };
  const onChangeConfirmPassword = (e) => {
    const confirmpassword = e.target.value.trim();
    setConfirmPassword(confirmpassword);
  };


  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);


    if (checkBtn.current.context._errors.length === 0) {
        if (password !== confirmpassword){
            setMessage("Passwords do not match. Re-type password.");
        }else {
            AuthService.register(first_name, last_name, phone_number, email, password).then(
                (response) => {
                  setMessage(response.data.message);
                  setSuccessful(true);
                  navigate("/login");
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
      
    }
  };

  return (
    <div className="register">
        <Container className="py-3">
            <div className="card">
                <div className='left'>
                    <Form onSubmit={handleRegister} ref={form}>
                        <h1>Register</h1>
                        <p>First Name</p>
                        <Input
                            type="text"
                            placeholder="Jane"
                            value={first_name}
                            onChange={onChangeFirstname}
                            validations={[required, validFirstName]}
                        />
                        <p>Last Name</p>
                        <Input
                            type="text"
                            placeholder="Doe"
                            value={last_name}
                            onChange={onChangeLastname}
                            validations={[required, validLastName]}
                        />
                        <p>Phone Number</p>
                        <Input
                            type="text"
                            placeholder="(xxx-xxx-xxxx)"
                            value={phone_number}
                            onChange={onChangePhonenumber}
                            validations={[required, validPhoneNumber]}
                        />
                        <p>Email</p>
                        <Input
                            type="text"
                            placeholder="Military email address"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required, validEmail]}
                        />
                        <p>Password</p>
                        <Input
                            type="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required, validPassword]}
                        />
                        <p>Confirm Password</p>
                        <Input
                            type="password"
                            value={confirmpassword}
                            onChange={onChangeConfirmPassword}
                            validations={[required]}
                        />
                        <button>Register</button>
                        {message && (
                            <div className={successful ? "alert alert-success":"alert alert-danger"}role="alert">
                                {message}
                            </div>
                        )}
                        <CheckButton style={{display:"none"}}ref={checkBtn}/>
                    </Form>
                </div>

                <div className='right'>
                    <h1>Welcome!</h1>
                    <p>Whether you've a professional looking to advance your career, an employer seeking top-tier talent, or an enthusiast eager to explore a marketplace of skills, Kalena Market is your destination. </p>
                    <span>Already have an account?</span>
                    <Link className="link" to="/login">Login</Link>

                </div>


            </div>
        </Container>
    </div>
  );
};

export default Registration;