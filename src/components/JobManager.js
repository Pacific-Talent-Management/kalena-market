import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import {Link} from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';

const JobManager = () => {
  const currentUser = AuthService.getCurrentUser();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getJobs();
        const jobData = response.data;
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

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div> Error: {error.message}</div>;
  }

  $(document).ready(function() {
    setTimeout(function() {
       $('#table').DataTable();
    }, 1000);
 });

  return (
    <div className="py-5 bg-light">
      <h2 className="mb-4 text-center text-dark">Current Job Opportunities</h2>
      <div>
        <table id="table" class="table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Show Applicants</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
                <tr>
                  <td>{job.title}</td>
                  <td>
                    <Link to="/job1">
                      <button>Show</button>
                    </Link>
                  </td>
                </tr>
            ))};
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default JobManager;
