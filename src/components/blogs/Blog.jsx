import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from '../../state/BlogProvider';

const Blog = ({ title, body }) => {
    // const dispatch = useDispatch();
    return (
        <>
            <h1>{title}</h1>
            <textarea>{body}</textarea>
            <button>Delete Post</button>
        </>
    );
};

Blog.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Blog;
