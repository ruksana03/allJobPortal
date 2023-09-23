import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";
import bg1 from '../../assets/images/bg1.png';
import bg2 from '../../assets/images/bg2.png';
import AppliedJob from "../AppliedJob/AppliedJob";
import { AiOutlineDown } from "react-icons/ai";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(jobApplied)
            const jobApplied = [];

            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobApplied.push(job)
                }
            }
            setAppliedJobs(jobApplied);
            setDisplayJobs(jobApplied);
        }


    }, [jobs])
    return (
        <div className=" grid grid-cols-1">

            <div className="absolute  top-0 left-0 bg-no-repeat  bg-[#313b7d13] max-h-screen  w-full mb-10"
                style={{
                    backgroundImage: `url(${bg2}),url(${bg1})`,
                    backgroundPosition: 'right top, left bottom',
                    backgroundSize: '200px 100px', // Set the width and height here
                    zIndex: -1,

                }}>

                <div className='py-12'>
                    <h1 className="text-center items-center mt-12 font-extrabold text-3xl font-['Manrope']">Applied Jobs:  {appliedJobs.length}</h1>
                </div>

            </div>
            

            <div className="mt-20">
                <div className="flex justify-end">
                    <details className="dropdown mb-4">
                        <summary className="m-1 btn">Filter By <AiOutlineDown></AiOutlineDown></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                            <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                            <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                        </ul>
                    </details>
                </div>
                <div>

                    <ul className="mb-16">
                        {
                            // displayJobs.map(job => <li key={job.id}><span>{job.job_title}{job.company_name}: {job.remote_or_onsite}</span></li>)
                            appliedJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
                            // job.map( applyjob => <AppliedJob key={job.id} applyjob={applyjob}></AppliedJob>)

                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;