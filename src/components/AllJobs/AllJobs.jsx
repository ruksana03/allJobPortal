import { useEffect, useState } from "react";
import Alljob from "../Alljob/Alljob";
import bg1 from '../../assets/images/bg1.png';
import bg2 from '../../assets/images/bg2.png';
import { useLoaderData } from "react-router-dom";


const AllJobs = () => {
   
    const [allJobs, setAllJobs] = useState([]);
   

 

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setAllJobs(data));

            
    }, [])

    return (
        <div className="grid grid-cols-1 gap-20">

            <div className="absolute  top-0 left-0 bg-no-repeat  bg-[#313b7d13] max-h-screen  w-full mb-10"
                style={{
                    backgroundImage: `url(${bg2}),url(${bg1})`,
                    backgroundPosition: 'right top, left bottom',
                    backgroundSize: '200px 100px', // Set the width and height here
                    zIndex: -1,

                }}>

                <div className='py-12'>
                    <h1 className="text-center items-center mt-12 font-extrabold text-3xl font-['Manrope']">All Jobs:  {allJobs.length}</h1>
                </div>

            </div>
            <div className="grid grid-cols-1 gap-6 mt-48 my-56">
                {
                    allJobs.map(allJob => <Alljob key={allJob.id} alljob={allJob}></Alljob>)
                }
            </div>
        </div>
    );
};

export default AllJobs;