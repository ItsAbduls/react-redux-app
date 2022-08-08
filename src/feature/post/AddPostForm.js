import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = ()=>{
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChange =(e)=> setTitle(e.target.value);
    const onContentChange = (e)=> setContent(e.target.value);
    const onAuthorChange = (e)=> setUserId(parseInt(e.target.value));

    const onSavePostClicked = ()=>{
        if(title && content)
        {
            dispatch(
                postAdded(
                    title,
                    content,
                    userId
                    )
            );

            setTitle('');
            setContent('');
        }
    }

    const userOptions = users.map(user=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
    
    return(
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
                /><br/>
                <label htmlFor="postAuthor">Select user</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                    <option value=""></option>
                    {userOptions}
                </select><br/>

                <label htmlFor="postContent">Post content</label>
                <input
                    title="post content"
                    id="postConent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                /><br/>
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
