import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import JobsModal from "../components/JobsModal.js";
import Hearts from "../components/Hearts.js";

const filterArray = (jobs, faves) => {
  var filtered = [];
  for (var j in jobs) {
    for (var f in faves) {
      if (jobs[j].id === faves[f].job_id) {
        filtered.push(jobs[j]);
      }
    }
  }

  return filtered;
};

const Favorites = () => {
  const currentUser = AuthService.getCurrentUser();

  const [jobs, setJobs] = useState([]);
  //const [favorites, setFavorites] = useState([]);
  const [faveIDs, setFaveIDs] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);
  //const [likedJobs, setLikedJobs] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        AuthService.getLikes(currentUser.id).then((res) => {
          console.log(res.data);
          setFaveIDs(res.data);
        });
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await UserService.getJobs();
        const jobData = response.data;
        console.log(jobData);
        setJobs(jobData);
        //setLoading(false);
      } catch (err) {
        console.error("Error fetchng job data:", err);
        //setError(err);
        //setLoading(false);
      }
    };

    fetchData().then();
  }, []);

  /*const toggleLike = (jobId) => {
        setLikedJobs((prevLikedJobs) =>
            ({...prevLikedJobs,
            [jobId]: !prevLikedJobs[jobId],
        }));
    }

    if (loading){
        return <div>Loading...</div>
    }
    if (error){
        return <div> Error: {error.message}</div>
    }
    */
  //These are the users favorites
  const filtered = filterArray(jobs, faveIDs);
  const empty = filtered.length === 0;

  return (
    <div className="d-flex justify-content-center">
      {empty ? (
        <Container className="py-5 w-100">
          <p>
            You have no favorites, go to the <Link to="/jobs">jobs</Link> page
            to add to favorites.
          </p>
          <img
            className="opacity-50 border border-sceondary border-5 rounded-4"
            src="/images/emptyFaves.gif"
            alt="Intructions to like a job"
            width="500px"
          />
        </Container>
      ) : (
        <div className="p-3">
          <div className="job-cards">
            {filtered.map((job) => (
              <Card bg="light" key="Light" text="dark" className="mb-4 w-100">
                <Card.Header className="border-bottom-0 pb-0 bg-light">
                  <h3>{job.title}</h3>
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
            ))}
          </div>
          <div className="text-end">
            <Button href="/profile" variant="secondary">
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
