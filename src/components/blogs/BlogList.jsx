import React from 'react';
import { useBlogState } from '../../state/blogProvider';
import Blog from './Blog';

const BlogList = () => {
    //using state from provider that was dispatched to reducer
    const blogs = useBlogState();
    //grabs state from provider and returns uls
    const blogElements = blogs.map(blog => {
        <li key={blog.title}>
            <Blog {...blogs} />
        </li>
    });

    return (
        <ul>
            {blogElements}
        </ul>
    );
}

export default BlogList;
