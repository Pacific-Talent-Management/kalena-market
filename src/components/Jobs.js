import React, {useState, useEffect} from 'react';
import UserService from '../services/user.service';
import './Jobs.css';

const Jobs = () => {
    
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
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Branch/MOS</th>
                        <th>Tenure</th>
                        <th>Job Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <tr key = {job.id}>
                            <td>{job.title}</td>
                            <td>{job.location}</td>
                            <td>{job.branch}</td>
                            <td>{job.tenure}</td>
                            <td>{job.job_rank}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
      );
};

export default Jobs;