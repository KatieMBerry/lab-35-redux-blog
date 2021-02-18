import { createBlog, CREATE_BLOG, DELETE_BLOG, deleteBlog } from './postActions';


describe('post actions', () => {
    it('creates a create_blog action', () => {
        const action = createBlog({
            title: 'hello world',
            body: 'my first blog post'
        });

        expect(action).toEqual({
            type: CREATE_BLOG,
            payload: { title: 'hello world', body: 'my first blog post' }
        });
    });

    it('deletes via a delete_blog action', () => {
        const action = deleteBlog({
            title: 'hello world'
        });

        expect(action).toEqual({
            type: DELETE_BLOG,
            payload: { title: 'hello world' }
        });
    });
});
