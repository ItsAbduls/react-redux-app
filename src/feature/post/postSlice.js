import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: 1, title: "using redux toolkit",
        content: "this example is related to social posts",
        date: sub(new Date(),{minutes:10}).toISOString(),
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
    },
    {
        id: 2, title: "Slices",
        content: "When i use slice word, i like to eat pizaa !!",
        date: sub(new Date(),{minutes:5}).toISOString(),
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
    }
];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action){
            const {postId, reaction} = action.payload;
            const existingPost = state.find(post=>post.id == postId);
            if(existingPost)
            {
                existingPost.reactions[reaction]++;
            }
        }
    }
});

// here we doing that here to get all posts because if something change we will change it here not in every component
export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;