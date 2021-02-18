import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/BlogProvider';
import { deleteBlog } from '../../actions/postActions';

const Blog = ({ title, body }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteBlog(title));
    };

    return (
        <>
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={handleClick}>Delete Post</button>
        </>
    );
};

Blog.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Blog;
