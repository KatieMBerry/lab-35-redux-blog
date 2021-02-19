import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/BlogsProvider';
import { deleteBlog } from '../../actions/postActions';

const Blog = ({ title }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteBlog(title));
    };

    return (
        <>
            <h1>{title}</h1>
            <button onClick={handleClick}>Delete Post</button>
        </>
    );
};

Blog.propTypes = {
    title: PropTypes.string.isRequired
};

export default Blog;
