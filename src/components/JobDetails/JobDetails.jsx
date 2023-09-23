import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localstorage";
import { AiOutlineDollar } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import JobDetailsHeader from "../JobDetailsHeader/JobDetailsHeader";





const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    // console.log(id, jobs)
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('you have apply successfully');
    }
    return (
        <div>
       <JobDetailsHeader></JobDetailsHeader>

            <div className="my-32">

                <div className="grid gap-5 md:grid-cols-5">
                    <div className="md:col-span-3">

                        <p className="mb-4 font-normal text-lg text-[#757575] font-['Manrope']"><span className="font-extrabold  text-black">Job Description:</span> {job.job_description}</p>
                        <p className="mb-4 font-normal text-lg text-[#757575] font-['Manrope']"><span className="font-extrabold  text-black">Job Responsibility:</span>{job.job_responsibility}</p>
                        <h2 className="mb-4 font-extrabold text-lg  text-black font-['Manrope']">Educational Requirements:</h2>
                        <p className="mb-4 font-normal text-lg text-[#757575] font-['Manrope']">{job.educational_requirements}</p>
                        <h2 className="mb-4 font-extrabold text-xl font-['Manrope']">Experiences:</h2>
                        <p className="mb-4 font-normal text-lg text-[#757575] font-['Manrope']">{job.experiences}</p>

                    </div>
                    <div className="col-span-2">
                        <div className=" bg-[#9873FF1A] p-8">

                            <h2 className="mb-4 font-extrabold text-xl  text-black font-['Manrope']">Job Details</h2>
                            <hr className="border-t-1 border-#9873FF" />
                            <hr className="border-t-1 border-#9873FF" />


                            <h4 className="flex justify-start gap-2 font-extrabold text-base font-['Manrope'] text-[#757575] mt-6"><AiOutlineDollar className="text-xl"></AiOutlineDollar><span className="text-[#474747]">Salary: </span> <p>{job.salary}</p>(Per Month)</h4>
                            <h4 className="flex justify-start gap-2 font-extrabold text-base font-['Manrope'] text-[#757575] mt-6"><BsCalendar3 className="text-xl"></BsCalendar3> <span className="text-[#474747]">Job Title:</span><p>{job.job_title}</p></h4>


                            <h2 className="mb-4 pt-8 font-extrabold text-xl  text-black font-['Manrope']">Contact Information</h2>
                            <hr className="border-t-1 border-#9873FF" />
                            <hr className="border-t-1 border-#9873FF" />



                            <h4 className="flex justify-start gap-2 font-extrabold text-base font-['Manrope'] text-[#757575] mt-6"><BsTelephone className="text-xl"></BsTelephone><span className="text-[#474747]">Phone:</span> <p>{job.contact_information.phone}</p></h4>
                            <h4 className="flex justify-start gap-2 font-extrabold text-base font-['Manrope'] text-[#757575] mt-6"><AiOutlineMail className="text-xl"></AiOutlineMail><span className="text-[#474747]">Email:</span> <p>{job.contact_information.email}</p></h4>
                            <h4 className="flex justify-start gap-2 font-extrabold text-base font-['Manrope'] text-[#757575] mt-6"><MdLocationPin className="text-xl"></MdLocationPin><span className="text-[#474747]">Address:</span> <p>{job.contact_information.address}</p></h4>
                        </div>
                        <button onClick={handleApplyJob} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-extrabold text-lg font-['Manrope'] w-full">Apply Now</button>
                    </div>

                </div>
                <ToastContainer />
            </div>
        </div>

    );
};

export default JobDetails;