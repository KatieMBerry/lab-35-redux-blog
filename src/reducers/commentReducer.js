import { CREATE_COMMENT, DELETE_COMMENT, DELETE_COMMENTS } from '../actions/commentActions';

export const initialState = {
    comments: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.paylod]
                //creates a key
                // [action.payload.postIndex]: [
                //     ...(state[action.payload.postIndex] || []),
                //     action.payload.comment
                // ]
            };
        case DELETE_COMMENTS:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.index !== action.payload)
                // ...state,
                // [action.payload.postIndex]: state[action.payload.postIndex]
                //     .filter(item => item.commentBody !== action.payload.commentBody)
            };
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.commentBody !== action.payload)
            };
        default:
            return state;
    }
}
