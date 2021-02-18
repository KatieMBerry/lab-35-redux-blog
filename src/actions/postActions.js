export const CREATE_BLOG = 'CREATE_BLOG';

//action creator = func that returns an action object
export const createBlog = blog => ({
    type: CREATE_BLOG,
    payload: blog
});

export const DELETE_BLOG = 'DELETE_BLOG';
export const deleteBlog = title => ({
    type: DELETE_BLOG,
    payload: title
});
