import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    const handleApplyJob = () =>{
        toast('You have applied successfully')
    }

    return (
        <div>

            <div className="grid md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <p>{job.company_name}</p>
                    <h2>Job Detaild of : {job.job_title}</h2>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn w-full btn-primary">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;