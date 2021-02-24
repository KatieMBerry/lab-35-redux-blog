import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../selectors/commentSelector';
import Comment from './Comment';

const CommentList = ({ index, commentBody }) => {
    const comments = useSelector(getComments) || [];
    // const allComments = comments[postIndex] || [];

    const commentElements = comments.filter(comment => comment.index === index).map(comment => (
        <li key={comment.commentBody}>
            <Comment {...comment} />
        </li>
    ));

    return (
        <ul>
            {commentElements}
        </ul>
    );
};

export default CommentList;
