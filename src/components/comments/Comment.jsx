import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

const Comment = ({ commentBody }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteComment(commentBody));
    };

    return (
        <>
            <h3>Comments</h3>
            <p>{commentBody}</p>
            <button onClick={handleClick}>Delete Comment</button>
        </>
    );
};

Comment.propTypes = {
    commentBody: PropTypes.string.isRequired
}

export default Comment;
