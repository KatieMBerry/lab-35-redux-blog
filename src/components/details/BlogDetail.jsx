import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/BlogsProvider';
// import { deleteComment } from '../../actions/commentActions';

const BlogDetail = ({ title, body, index }) => {
    // const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    // const handleClick = () => {
    //     dispatch(deletComment(index));
    // };
    const handleClick = () => {
        dispatch(addComment(comment))
    };

    return (
        <>
            <h1>{title}</h1>
            <p>{body}</p>
            <textarea
                placeholder="add a comment"
                value={comment}
                onChange={({ target }) => setComment(target.value)}>
            </textarea>
            <button onClick={handleClick}>Submit Comment</button>
            {/* <button onClick={handleClick}>Delete Comment</button> */}
        </>
    );
};

BlogDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    // comment: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};

export default BlogDetail;
