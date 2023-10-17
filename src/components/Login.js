import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import "./Login.css"

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

const Login = () => {
  let navigate = useNavigate();

  const form = useRef();      // form persists between rerenders
  const checkBtn = useRef();  // checkBtn persists between rerenders

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className = "login">
      <Container className="py-3">
        <div className="card">

          <div className='left'>
            <h1>Log In</h1>
            <Form onSubmit={handleLogin} ref={form}>
              <p>Email</p>
              <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required]}
                  placeholder="Email"
              />
              <p>Password</p>
              <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                  placeholder="Password"
              />

              <button className="btn btn-primary btn block" disabled={loading}>
                {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
              {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
              )}

              <CheckButton style={{display:"none"}}ref={checkBtn}/>
              <Link to="/register">Forgot password?</Link>
            </Form>
          </div>

          <div className='right'>
            <img src="/images/logo.png" alt="kalena-market-logo-img" width="300px"/>
            <h2>Pacific Talent Management Marketplace</h2>
            <p>Kalena Market is a dynamic platform where individuals nurture and showcase their unique skills and talents. Join us on a journey where your skills and ambitions meet endless possibilities. Find your path, connect with like-minded individuals, and unlock the full potential of your talents at Kalena Market.</p>
            <span>Don't have an account?</span>
            <Link to="/register">Register</Link>
          </div>



        </div>
      </Container>
    </div>
  );
};

export default Login;