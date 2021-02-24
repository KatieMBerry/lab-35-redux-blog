import { getComments } from './commentSelector';

describe('comment selectors', () => {
    it('selects the list of comments from state', () => {
        const state = {
            comments: [{ commentBody: 'my first blog comment' }]
        };
        //returns the array of comments
        const comments = getComments(state);
    });
});
