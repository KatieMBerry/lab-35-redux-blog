import { createComment, CREATE_COMMENT, DELETE_COMMENT, deleteComment } from './commentActions';

describe('comment actions', () => {
    it('creates a create_comment action', () => {
        const action = createComment([{
            commentBody: 'niiice'
        }]);

        expect(action).toEqual({
            type: CREATE_COMMENT,
            payload: [{
                commentBody: 'niiice'
            }]
        });
    });

    it('deletes via a DELETE_COMMENT action', () => {
        const action = deleteComment({
            commentBody: 'niiice'
        });

        expect(action).toEqual({
            type: DELETE_COMMENT,
            payload: { commentBody: 'niiice' }
        });
    });
});
