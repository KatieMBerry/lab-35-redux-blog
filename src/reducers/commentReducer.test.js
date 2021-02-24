import commentReducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';

describe('comment reducer', () => {
    // it('adds a comment with the CREATE_COMMENT action', () => {
    //     const state = {
    //         comments: []
    //     };

    //     const action = createComment({
    //         commentBody: 'my first comment'
    //     });
    //     //will run the above state and action through reducer:
    //     const newState = commentReducer(state, action);

    //     expect(newState).toEqual({
    //         comments: [{
    //             commentBody: 'my first comment'
    //         }]
    //     });
    // });

    it('deletes a comment via delete_comment action', () => {
        const state = {
            comments: [{ commentBody: 'my first comment' }]
        }

        const action = deleteComment('my first comment');

        expect(commentReducer(state, action)).toEqual({
            comments: []
        });
    });
});
