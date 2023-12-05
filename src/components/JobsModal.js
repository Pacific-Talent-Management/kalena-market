import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function JobsModal(props) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <i className='more fs-1' onClick={handleShow}>...</i>

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
                    
                    <Modal.Title>{props.title}
                    	{props.critical ? (
                	<i className="bi bi-exclamation-circle-fill mx-2 text-danger"></i>
                	):(
                 	<></>
                	)}
                    </Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                <div  className='scrollbar overflow-auto'
                                style={{height: '50vh'}}>
                    <p><strong>Description: </strong>{props.description}</p>
                    <p><strong>Open & Closing Dates: </strong>{props.open} - {props.close}</p>
                    <p><strong>Pay Scale & Grade: </strong>{props.pay}</p>    
                    <p><strong>Location: </strong>{props.location}</p>
                    <p><strong>Schedule: </strong>{props.schedule}</p>
                    <p><strong>Remote: </strong>{props.remote}</p>
                    <p><strong>Travel: </strong>{props.travel}</p>
                    <p><strong>Duties: </strong></p>
                    
                    <ul>
          		{props.duties &&
            		props.duties.map((data, index) => <li key={index}>{data}</li>)}
        	    </ul>
        	    
        	    <h4 className='my-4'>Requirements</h4>
        	    
        	    <h5>Conditions of Employment:</h5>
                    <ul>
          		{props.conditions &&
            		props.conditions.map((data, index) => <li key={index}>{data}</li>)}
        	    </ul>
        	    
        	    <h5>Qualifications:</h5>
                    <ul>
          		{props.qualifications &&
            		props.qualifications.map((data, index) => <p key={index}>{data}</p>)}
        	    </ul>
        	    
        	    <h5>Education:</h5>
        	    <p>{props.education}</p>
        	    
        	    <h5>Additional Information:</h5>
                    <ul>
          		{props.additional &&
            		props.additional.map((data, index) => <li key={index}>{data}</li>)}
        	    </ul>
        	    
                    
		</div>
                </Modal.Body>
                <Modal.Footer>
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
