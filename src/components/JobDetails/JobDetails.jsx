import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log();
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
                    <button className="btn w-full btn-primary">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;