import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const users = useSelector(selectAllUsers);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChange = (e) => setUserId(parseInt(e.target.value));

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(addNewPost({ title, body: content, userId })).unwrap();
                setTitle('');
                setContent('');
                setUserId('');
            } catch (error) {
                console.error('Failed to save the post', error);
            } finally{
                setAddRequestStatus('idle');
            }
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>Add new post</h2>
            <form>
                <label htmlFor="postTitle">Post title:</label>
                <input
                    title="post title"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                /><br />
                <label htmlFor="postAuthor">Select user</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                    <option value=""></option>
                    {userOptions}
                </select><br />

                <label htmlFor="postContent">Post content</label>
                <input
                    title="post content"
                    id="postConent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                /><br />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save post</button>
            </form>
        </section>
    )
}

export default AddPostForm;
