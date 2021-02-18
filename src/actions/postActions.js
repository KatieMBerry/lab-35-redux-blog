export const CREATE_BLOG = 'CREATE_BLOG';

//action creator = func that returns an action object
export const createBlog = blog => ({
    type: CREATE_BLOG,
    payload: blog
});
