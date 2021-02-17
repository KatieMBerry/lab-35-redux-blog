import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ title, body }) => {
    return (
        <>
            <h1>{title}</h1>
            <textarea>{body}</textarea>
        </>
    )
}

Blog.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default Blog;
