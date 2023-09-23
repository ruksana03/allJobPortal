import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import user from '../../assets/images/user.png'
import bg1 from '../../assets/images/bg1.png';
import bg2 from '../../assets/images/bg2.png';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="">
            <div className="absolute  top-0 left-0 bg-no-repeat  bg-[#313b7d13] max-h-screen  w-full mb-10"
                style={{
                    backgroundImage: `url(${bg2}),url(${bg1})`,
                    backgroundPosition: 'right top, left bottom',
                    backgroundSize: '200px 100px', // Set the width and height here
                    zIndex: -1,
                }}>

                <div className='py-12'>
                    <h1 className="text-center items-center mt-12 font-extrabold text-3xl font-['Manrope']">Blogs:{blogs.length}  </h1>
                </div>

            </div>
            <div className="grid grid-cols-2 mt-36 pt-20 gap-5">
                <div className="grid grid-cols-1 gap-4" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>
                <div className='border-2 border-[#E8E8E8] '>
                    <img className="w-full h-full object-cover" src={user} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;