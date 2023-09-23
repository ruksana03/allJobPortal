import { useEffect, useState } from "react";
import Job from "../Job/Job";
import { Link } from "react-router-dom";



const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div>

            <div>

                <h2 className="text-5xl text-center font-extrabold font-['Manrope']">Featured Jobs: {jobs.length}</h2>
                <p className="text-center text-base text-[#757575] font-['Manrope']">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            {/* <div className="grid grid-cols-2 gap-6 mt-8">
                {
                   jobs.map(alljob => <AllJob alljob={alljob}></AllJob>)
                }
            </div> */}

            <div className="mt-6 mb-24 text-center">
                <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <Link to='/jobs'>
                        <button onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-extrabold text-lg font-['Manrope']">See All Jobs</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;