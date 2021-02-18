import reducer from './postReducer';
import { createBlog, deleteBlog } from '../actions/postActions';

describe('blog reducer', () => {
    it('adds a blog with the CREATE_BLOG action', () => {
        const state = {
            blogs: []
        };

        const action = createBlog({
            title: 'hello world',
            body: 'my first blog post body'
        });
        //will run the above state and action through reducer:
        const newState = reducer(state, action);

        expect(newState).toEqual({
            blogs: [{ title: 'hello world', body: 'my first blog post body' }]
        });
    });

    it('deletes a blog post via delete_blog action', () => {
        const state = {
            blogs: [{ title: 'hello world', body: 'my first blog post' }]
        }

        const action = deleteBlog('hello world');

        expect(reducer(state, action)).toEqual({
            blogs: []
        });
    });
});
