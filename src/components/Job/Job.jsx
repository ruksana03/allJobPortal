import { MdLocationPin } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    return (
        <div className="grid grid-cols-1 gap-4 bg-base-100 shadow-xl p-8">
            <figure><img className="flex justify-start" src={logo} alt="" /></figure>
            <div className="">
                <div className="py-4">
                <h2 className="">{job_title}</h2>
                <p>{company_name}</p>
                </div>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">{job_type}</button>
                </div>
                <div className="flex py-4">
                    <h2 className="flex mr-4"><MdLocationPin className="text-2xl mr-2"></MdLocationPin>{location}</h2>
                    <h2 className="flex"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>Salary :{salary}</h2>
                </div>
                <div className="">
                    <Link to={`/job/${id}`}><button className="btn bg-[#9873FF] text-white w-full">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;