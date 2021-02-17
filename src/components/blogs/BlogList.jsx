import React from 'react';
import Blog from './Blog';

const BlogList = () => {
    //grabs state from provider and returns uls
    const blogElements = blogs.map(blog => {
        <li key={blog.title}>
            <Blog {...blogPosts} />
        </li>
    });

    return (
        <ul>
            {blogElements}
        </ul>
    );
}

export default BlogList;
