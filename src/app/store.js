import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "../feature/counter/counterSlice";
import postReducer from "../feature/post/postSlice";
import userReducer from "../feature/users/userSlice";

export const store = configureStore({
    reducer:{
        //counter: counterReducer,
        posts: postReducer,
        users: userReducer
    }
});