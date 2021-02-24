import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getBlogs } from '../../selectors/blogSelectors';
import CommentList from '../comments/CommentList';
import CommentForm from '../form/CommentForm';

const BlogDetail = ({ match, postIndex }) => {
    // const dispatch = useDispatch();
    const blogs = useSelector(getBlogs);
    console.log(match);
    let blog;
    for (let i = 0; i < blogs.length; i++) {
        blog = blogs[i]
        if (match.params.postIndex === i && blog.length) {
            return blog;
        };
    }

    return (
        <>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>

            <CommentForm postIndex={postIndex} />
            <CommentList postIndex={postIndex} />
        </>
    )
}

BlogDetail.propTypes = {
    match: PropTypes.object.isRequired,
    postIndex: PropTypes.number.isRequired
};

export default BlogDetail;
