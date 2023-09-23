import user from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 justify-between">
                <img src={user} className="max-w-full h-full  order-2" />
                <div className='order-1'>
                    <h1 className="text-8xl font-extrabold  font-['Manrope']">One Step Closer To Your <span className='bg-gradient-to-r bg-clip-text text-[#7E90FE] from-cyan-500 to-blue-500 '>Dream Job</span></h1>
                    <p className="py-6 text-base text-[#757575] font-['Manrope']">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-extrabold text-lg font-['Manrope']">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;