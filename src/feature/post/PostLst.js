import { useSelector } from "react-redux";
import React from 'react';
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const postList = () => {
    const posts = useSelector(selectAllPosts);

    const renderPost = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />
            </p> 
            <ReactionButtons post={post}/>
        </article>
    ));

    return (
        <section>
            <h2>Posts</h2>
            {renderPost}
        </section>
    )
}

export default postList;