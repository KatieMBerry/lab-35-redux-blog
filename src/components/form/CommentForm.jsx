import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { createComment } from '../../actions/commentActions';
import { useDispatch } from 'react-redux';

const CommentForm = ({ index }) => {
    const dispatch = useDispatch();

    const [commentBody, setCommentBody] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createComment({ commentBody, index }));
    };
    return (
        <>
            <form onSubmit={handleSubmit} >

                <textarea
                    name="commentBody"
                    placeholder="leave a  comment"
                    value={commentBody}
                    onChange={({ target }) => setCommentBody(target.value)}></textarea>

                <button>Submit Comment</button>
            </form>
        </>
    )
}

// CommentForm.propTypes = {
//     postIndex: PropTypes.number.isRequired
// }

export default CommentForm;
