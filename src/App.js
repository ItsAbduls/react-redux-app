import logo from './logo.svg';
import './App.css';
import React from 'react';
import PostList from './feature/post/PostLst';
import AddPostForm from './feature/post/AddPostForm';
import Layout from './components/Layout';
import { Routes, Route} from 'react-router-dom';
import SinglePostPage from './feature/post/SinglePost';
import EditPostForm from './feature/post/EditPost';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<PostList />}/>

        <Route path='post'>
          <Route index element={<AddPostForm/>}/>
          <Route path=':postId' element={<SinglePostPage/>}/>
          <Route path='edit/:postId' element={<EditPostForm/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
