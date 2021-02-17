import reducer from './postReducer';
import { createBlog } from '../actions/postActions';

describe('blog reducer', () => {
    it('adds a blog with the CREATE_BLOG action', () => {
        const state = {
            blogs: []
        };

        const action = createBlog({
            title: 'hello world',
            body: 'my first blog post body'
        });

        const newState = reducer(state, action);

        expect(newState).toEqual({
            blogs: [{ title: 'hello world', body: 'my first blog post body' }]
        });
    });
});
