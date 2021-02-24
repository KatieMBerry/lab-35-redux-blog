import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../actions/postActions';
import { deleteComments } from '../../actions/commentActions';
import CommentForm from '../form/CommentForm';
import CommentList from '../comments/CommentList';

const Blog = ({ title, body, index }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteBlog(title));
        dispatch(deleteComments(index));
    };

    return (
        <>
            <dl>
                <dt>Blog Title</dt>
                <dd>{title}</dd>

                <dt>Content</dt>
                <dd>{body}</dd>
            </dl>
            {/* <Link to={`/blogs/${index}`}><h1>{title}</h1></Link> */}
            <button onClick={handleClick}>Delete Blog</button>

            <CommentForm index={index} />
            <CommentList index={index} />
        </>
    );
};

Blog.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};

export default Blog;
