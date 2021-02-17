import { countBlogs, getBlogs } from './blogSelector';

describe('blog selectors', () => {
    it('selects the list of blogs from state', () => {
        const state = {
            blogs: [{ title: 'hello world', body: 'my first blog body' }]
        };
        //returns the array of blogs
        const blogs = getBlogs(state);
    });

    it('counts the number of blogs in the list', () => {
        const state = {
            blogs: [{ title: 'hello world', body: 'my first blog body' }]
        };
        expect(countBlogs(state)).toEqual(1);
    });
});
