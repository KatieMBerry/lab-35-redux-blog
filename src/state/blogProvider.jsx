import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from '../reducers/postReducer';

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            {children}
        </BlogContext.Provider>
    );
};

//hook to make it easier for child components to access dispatch
export const useDispatch = () => {
    const { dispatch } = useContext(BlogContext);
    return dispatch;
}
//hook to make it easier for child components to access state
export const useSelector = selector => {
    const { state } = useContext(BlogContext);
    return selector(state);
}
