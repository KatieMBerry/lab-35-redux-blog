import React from 'react';
import { getBlogs } from '../../selectors/blogSelector';
import { useSelector } from '../../state/BlogProvider';
import Blog from './Blog';

const BlogList = () => {
    //instead of getting all state, now asks provider for only blogs
    const blogs = useSelector(getBlogs);
    //grabs state from provider and returns uls
    const blogElements = blogs.map(blog => {
        return (
            <li key={blog.title}>
                <Blog {...blog} />
            </li>
        )
    });

    return (
        <ul>
            {blogElements}
        </ul>
    );
};

export default BlogList;
