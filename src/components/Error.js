import React from 'react';
import { Container, Row } from 'react-bootstrap';


const Error = () => {

    return (
		<div className='d-flex align-items-center'style={{height: "500px"}}>
    	<Container className='d-flex justify-content-center'>
    	<Row className='w-20' style={{fontSize: "75px"}}><strong>404</strong></Row>
		<Row className='mx-4 my-4 w-80 fs-1'>: Page Not Found</Row>
    	</Container>
		
		</div>
    );
};

export default Error;
