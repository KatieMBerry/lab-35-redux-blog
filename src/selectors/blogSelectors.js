export const getBlogs = state => {
    //returns only a part of state defined with dot notation
    return state.blogs;
}

export const countBlogs = state => state.blogs.length;
