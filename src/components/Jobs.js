import React, {useState, useEffect} from 'react';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';
import JobsModal from '../components/JobsModal.js';
import Hearts from '../components/Hearts.js';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const Jobs = () => {
    const currentUser = AuthService.getCurrentUser();
    
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await UserService.getJobs();
                const jobData = response.data;
                console.log(jobData);
                setJobs(jobData);
                setLoading(false);
            }catch (err) {
                console.error("Error fetchng job data:", err);
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    /*
    const toggleLike = (jobId) => {
        setLikedJobs((prevLikedJobs) =>
            ({...prevLikedJobs,
            [jobId]: !prevLikedJobs[jobId],
        }));
    }
    */
    if (loading){
        return <div>Loading...</div>
    }
    if (error){
        return <div> Error: {error.message}</div>
    }

    return (
        <div className='py-5 bg-light'>
            <h2 className='mb-4 text-center text-dark'>Current Job Opportunities</h2>
            <div className="job-cards">

                {jobs.map((job) => (
                    <div className='d-flex justify-content-center'>
                    <Card bg="light" key="Light" text="dark" className='mb-4 w-75'>
                        <Card.Header className='border-bottom-0 pb-0 bg-light'>
                            <h3>{job.title}</h3>  
                        </Card.Header>
                        <Card.Body
                            className='border-top-0 border-bottom-0 py-0 scrollable overflow-hidden'
                            style={{height: '125px'}}>
                            <Row key={job.id}>
                              <p>{job.description}</p>
                            </Row>
                            <Row>
                              <div className='d-flex justify-content-center'>
                              <Row className='w-50'>
                                <p><strong>Location: </strong>{job.location}</p>
                                <p><strong>Branch/MOS: </strong>{job.branch}</p>
                              </Row>
                              <Row className='w-50'>
                                <p><strong>Tenure: </strong>{job.tenure}</p>
                                <p><strong>Job Rank: </strong>{job.job_rank}</p>
                              </Row>
                              </div>
                            </Row>
                        </Card.Body>
                        <Card.Footer className='d-flex justify-content-between border-top-0 py-0 bg-light'>
                            <JobsModal id={job.id} title={job.title} description={job.description} location={job.location} branch={job.branch} tenure={job.tenure} job_rank={job.job_rank} requirements={job.requirements}/>
                            <Hearts user_id = {currentUser.id} job_id = {job.id}/>
                        </Card.Footer>
                    </Card>
                    </div>

                ))}
            </div>
        </div>
      );
}

export default Jobs;
