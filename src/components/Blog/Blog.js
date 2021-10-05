import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleBlog from './SingleBlog/SingleBlog';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./fakeBlog.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                console.log(data);
            });
    }, [])
    return (
        <Container style={{ minHeight: '80vh' }}>

            <div className="my-3">
                {blogs.map((blog, idx) => <SingleBlog
                    key={idx}
                    blog={blog}
                ></SingleBlog>)}
            </div>
        </Container>
    );
};

export default Blog;