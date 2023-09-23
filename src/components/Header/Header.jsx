import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <div className="flex gap-2">
            <li className="text-[#757575] font-semibold font-['Manrope'] text-base"><NavLink to='/statistics'>Statistics</NavLink></li>
            <li className="text-[#757575] font-semibold font-['Manrope'] text-base"><NavLink to='/applied'>Applied Jobs</NavLink></li>
            <li className="text-[#757575] font-semibold font-['Manrope'] text-base"><NavLink to='/blogs'>Blogs</NavLink></li>
            <li className="text-[#757575] font-semibold font-['Manrope'] text-base"><NavLink to='/'>Home</NavLink></li>
            <li className="text-[#757575] font-semibold font-['Manrope'] text-base"><NavLink to='/jobs'>Jobs</NavLink></li>
        </div>

    </>
    return (
        <div className="navbar mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-4xl">Career Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-extrabold text-lg font-['Manrope']">Start Applying</a>
            </div>
        </div>
    );
};

export default Header;