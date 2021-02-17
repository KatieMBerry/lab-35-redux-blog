import React, { useState } from 'react';
import { createBlog } from '../../actions/postActions';
import { useDispatch } from '../../state/blogProvider';

const BlogForm = () => {
    const dispatch = useDispatch();
    //local state
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(createBlog({ title, body }));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={({ target }) => setTitle(target.value)} />

                <input
                    type="text"
                    placeholder="body"
                    value={body}
                    onChange={({ target }) => setBody(target.value)} />

                <button>Submit Blog</button>
            </form>
        </>
    )
}

export default BlogForm;
