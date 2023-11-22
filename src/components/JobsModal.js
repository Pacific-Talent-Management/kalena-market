import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import Hearts from '../components/Hearts.js';
import AuthService from '../services/auth.service';

function JobsModal(props) {
    const currentUser = AuthService.getCurrentUser();
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link className="more" onClick={handleShow}>...</Link>

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
                    
                    <Modal.Title>{props.title}</Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Description: </strong>{props.description}</p>
                    <p><strong>Location: </strong>{props.location}</p>
                    <p><strong>Branch/MOS: </strong>{props.branch}</p>
                    <p><strong>Tenure: </strong>{props.tenure}</p>
                    <p><strong>Job Rank: </strong>{props.job_rank}</p>
                    <p><strong>Requirements: </strong>{props.requirements}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Hearts user_id = {currentUser.id} job_id = {props.id}/>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        Apply
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default JobsModal;
