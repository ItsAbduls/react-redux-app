import { useSelector, useDispatch } from "react-redux";
import React,{useEffect} from 'react';
import { selectAllPosts, getPostsError,getPostsStatus, fetchPosts } from "./postSlice";
import PostsExcerpt from "./PostExcerpt";

const postList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    
    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded' && posts.length>0) {
        const renderedPost = [...posts];
        let i=1;
        content = renderedPost.map(post => <PostsExcerpt key={post.id+(i++)} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default postList;