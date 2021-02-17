import reducer from './postReducer';

describe('blog reducer', () => {
    it('adds a blog with the CREATE_BLOG action', () => {
        const state = {
            blogPosts: []
        };

        const action = {
            type: CREATE_BLOG,
            payload: {
                title: 'hello world',
                body: 'my first blog post body'
            }
        };

        const newState = reducer(state, action);

        expect(newState).toEqual({
            blogPosts: [{ title: 'hello world', body: 'my first blog post body' }]
        });
    });
});
