import { CREATE_BLOG } from '../actions/postActions';

export const initialState = {
    blogPosts: []
}

export default function reducer(state, action) {
    switch (action.type) {
        case CREATE_BLOG:
            return {
                ...state,
                blogPosts: [...state.blogPosts, action.payload]
            };
        default:
            return state;
    }
}
