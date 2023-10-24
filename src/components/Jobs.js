import React, {useState, useEffect} from 'react';
import UserService from '../services/user.service';
import './Jobs.css';

const Jobs = () => {
    
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [likedJobs, setLikedJobs] = useState(false);

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

    const toggleLike = (jobId) => {
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

    return (
        <div className = "job-contents">
          <div className="job-table">
            <h2>Current Job Opportunities</h2>
            <div className="job-cards">
                {jobs.map((job) => (
                    <div className="job-card" key={job.id}>
                        <div className="card-header">
                            <h3>{job.title}</h3>
                            <button onClick={() => toggleLike(job.id)}
                                style={{color: likedJobs[job.id] ? 'red' : 'black'}}
                            >
                                {likedJobs[job.id] ? '♥️': '♡'}
                            </button>
                        </div>
                        <div className="card-content">
                            <p><strong>Location: </strong>{job.location}</p>
                            <p><strong>Branch/MOS: </strong>{job.branch}</p>
                            <p><strong>Tenure: </strong>{job.tenure}</p>
                            <p><strong>Job Rank: </strong>{job.job_rank}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      );
}

export default Jobs;