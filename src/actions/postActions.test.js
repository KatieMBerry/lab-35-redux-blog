import { createBlog, CREATE_BLOG } from './postActions';

describe('popst actions', () => {
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
});
