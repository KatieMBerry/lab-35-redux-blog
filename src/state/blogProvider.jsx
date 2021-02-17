import React, { createContext } from 'react';

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer();

    return (
        <BlogContext.Provider value={state, dispatch}>
            {children}
        </BlogContext.Provider>
    );
} 
