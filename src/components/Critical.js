import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import JobsModal from "../components/JobsModal.js";
import Hearts from "../components/Hearts.js";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Home.css";

const Critical = () => {

  const currentUser = AuthService.getCurrentUser();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getJobs();
        const jobData = response.data.filter((data) => data.critical);
        //console.log(jobData);
        setJobs(jobData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetchng job data:", err);
        setError(err);
        setLoading(false);
      }

    };
    fetchData();
  }, []);
  

  
  
  return (

      <div className="job-cards">
        {jobs.map((job) => (
          <div className="d-flex justify-content-center">
            <Card key="light" text="dark" className="mb-4 w-75 bg-light">
              <Card.Header className="border-bottom-0 pb-0 bg-light">
                <h3>
                {job.title}
                {job.critical ? (
                	<i className="bi bi-exclamation-circle-fill mx-2 text-danger"></i>
                ):(
                 <></>
                )}

                </h3>
              </Card.Header>
              <Card.Body className="border-top-0 border-bottom-0 py-0">
                <Row key={job.id}>
                  <p>{job.description}</p>
                </Row>
                <Row>
                  <div className="d-flex justify-content-center">
                    <Row className="w-50">
                      <p>
                        <strong>Open & Closing Dates: </strong>
                        {job.open} - {job.close}
                      </p>
                      <p>
                        <strong>Pay Scale & Grade: </strong>
                        {job.pay}
                      </p>
                    </Row>
                    <Row className="w-50">
                      <p>
                        <strong>Location: </strong>
                        {job.location}
                      </p>
                      <p>
                        <strong>Schedule: </strong>
                        {job.schedule}
                      </p>
                    </Row>
                  </div>
                </Row>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between border-top-0 py-0 bg-light">
                <JobsModal
                  id={job.id}
                  critical={job.critical}
                  title={job.title}
                  description={job.description}
                  open={job.open}
                  close={job.close}
                  pay={job.pay}
                  location={job.location}
                  remote={job.remote}
                  travel={job.travel}
                  schedule={job.schedule}
                  duties={job.duties}
                  conditions={job.conditions}
                  qualifications={job.qualifications}
                  education={job.education}
                  additional={job.additional}
                />
                <Hearts user_id={currentUser.id} job_id={job.id} />
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>

  );
};

export default Critical;
