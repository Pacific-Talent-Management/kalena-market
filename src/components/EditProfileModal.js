import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";
function EditProdileModal(props) {
    //Modal variables
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Form variables
    const form = useRef();
    const checkBtn = useRef();
    let navigate = useNavigate();

    const [location, setLocation] = useState("");
    const [rank, setRank] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeLocation = (e) => {
        const location = e.target.value;
        setLocation(location);
    }
    const onChangeRank = (e) => {
        const rank = e.target.value;
        setRank(rank);
    }

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);


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
    };

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

                    <Form onSubmit={handleRegister} ref={form}>
                        <p>Location</p>
                        <Input
                            type="text"
                            placeholder="Base Location"
                            value={props.location}
                            onChange={onChangeLocation}
                        />
                        <p>Rank</p>
                        <Input
                            type="text"
                            placeholder="Users' Rank"
                            value={props.rank}
                            onChange={onChangeRank}
                        />
                        <button>Submit</button>
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

export default EditProdileModal;