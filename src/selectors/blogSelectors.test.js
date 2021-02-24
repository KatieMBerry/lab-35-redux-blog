import { getBlogs } from './blogSelectors.js';

describe('blog selectors', () => {
    it('selects the list of blogs from state', () => {
        const state = {
            blogs: [{ title: 'hello world', body: 'my first blog body' }]
        };
        //returns the array of blogs
        const blogs = getBlogs(state);
    });
});
