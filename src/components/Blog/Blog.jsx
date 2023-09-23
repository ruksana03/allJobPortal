import React from 'react';
import { Link } from 'react-router-dom';


const Blog = ({blog}) => {
    const {id,blog_title,blog_type,date,description,img,logo} =blog;
    return (
        <div className='border-2 border-[#E8E8E8] p-8'>
            <div>
                <h1>{blog_title}</h1>
                <h1>{blog_type}</h1>
                <p>{date}</p>
            </div>
            <div>
                <Link to={`/blog/${id}`}><button className='btn w-full text-white bg-[#9873FF]'>Read About</button></Link>
                
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Blog;