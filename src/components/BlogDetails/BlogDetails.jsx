
import { useLoaderData, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const blogs = useLoaderData();
    const { id } = useParams();
    console.log(id, blogs)
    const idInt = parseInt(id)
    const blog = blogs.find(blog => blog.id === idInt)
    return (
        <div>
            <h1>{blog.blog_title}</h1>
            <h1>{blog.blog_type}</h1>
            <h1>{blog.description}</h1>
        </div>
    );
};

export default BlogDetails;