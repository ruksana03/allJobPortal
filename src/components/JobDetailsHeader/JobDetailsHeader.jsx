
import bg1 from '../../assets/images/bg1.png';
import bg2 from '../../assets/images/bg2.png';

const JobDetailsHeader = () => {

    return (
        <div className="absolute  top-0 left-0 bg-no-repeat  bg-[#313b7d13] max-h-screen  w-full mb-10"
        style={{
            backgroundImage: `url(${bg2}),url(${bg1})`,
            backgroundPosition: 'right top, left bottom',
            backgroundSize: '200px 100px', // Set the width and height here
            zIndex: -1,

        }}>
            
            <div className='py-12'>
            <h1 className="text-center items-center mt-12 font-extrabold text-3xl font-['Manrope']">Job Details</h1>
        </div>

    </div>
    );
};

export default JobDetailsHeader;