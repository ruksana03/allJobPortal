import { MdLocationPin } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppliedJob = ({ appliedJob }) => {
    console.log(appliedJob);
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = appliedJob;
    return (
        <div className=" bg-white border-solid border-2 border-[#E8E8E8] grid grid-cols-1 gap-4 p-5">

            <div className="grid grid-cols-3 space-x-14 lg:flex-row">
                <div className="bg-[#F4F4F4] rounded-lg w-full h-full flex justify-center items-center">
                    <img className="" src={logo} alt="" />
                </div>

                <div className=" flex flex-col gap-3">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">{job_type}</button>
                    </div>
                    <h2 className="flex mr-4"><MdLocationPin className="text-2xl mr-2"></MdLocationPin>{location}</h2>
                    <h2 className="flex"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>Salary :{salary}</h2>
                </div>

                <div className="flex justify-center items-center">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;