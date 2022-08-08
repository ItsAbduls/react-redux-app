import logo from './logo.svg';
import './App.css';
import React from 'react';
import PostList from './feature/post/PostLst';
import AddPostForm from './feature/post/AddPostForm';

function App() {
  return (
    <div className="App">
      <AddPostForm/>
      <PostList/>
    </div>
  );
}

export default App;
