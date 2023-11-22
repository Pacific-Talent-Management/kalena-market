import React, {useState, useEffect} from 'react';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import JobsModal from '../components/JobsModal.js';
import Hearts from '../components/Hearts.js';
import './Favorites.css';

const filterArray = (jobs, faves) => {
    var filtered = [];
    for(var j in jobs){
	for(var f in faves) {
	   if(jobs[j].id == faves[f].job_id){
		filtered.push(jobs[j]);
	   }
	}
    };
    
    return filtered
};

const Favorites = () => {
    const currentUser = AuthService.getCurrentUser();
    
    const [jobs, setJobs] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [faveIDs, setFaveIDs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [likedJobs, setLikedJobs] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                AuthService.getLikes(currentUser.id).then(res => {
                console.log(res.data);
    	    	setFaveIDs(res.data);
                })
            
            }catch (err) {
            	console.log(err);
            }

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

           fetchData().then();
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
    
    //These are the users favorites
    const filtered = filterArray(jobs, faveIDs);
    const empty = filtered.length == 0;

    return (
        
          <div className = "job-contents">
            {empty? (
            <div className="emptyFaves">
            	<p>You have no favorites, go to the <Link to="/jobs">jobs</Link> page to add to you favorites.</p>
            	<img src="/images/emptyFaves.gif" alt="Intructions to like a job" width="500px"/>
            </div>
            ):(
            <div className="job-table">
             <div className="job-cards">
                {filtered.map((job) => (
                    <div className="job-card" key={job.id}>
                        <div className="card-header">
                            <h3>{job.title}</h3>
                            <p>{job.description}</p>
                        </div>
                        <div className="card-content">
                            <p><strong>Location: </strong>{job.location}</p>
                            <p><strong>Branch/MOS: </strong>{job.branch}</p>
                            <p><strong>Tenure: </strong>{job.tenure}</p>
                            <p><strong>Job Rank: </strong>{job.job_rank}</p>
                        </div>
                        <div className="card-links">
                            <Hearts user_id = {currentUser.id} job_id = {job.id}/>
                            <JobsModal id={job.id} title={job.title} description={job.description} location={job.location} branch={job.branch} tenure={job.tenure} job_rank={job.job_rank} requirements={job.requirements}/>

                        </div>

                    </div>
                    
                ))}
                
            </div>
            	<div className="btnFaves">
            		<Button href="/profile" variant="secondary">Save</Button>
    		</div>
            </div>
            )}
         </div>

      );
}

export default Favorites;
