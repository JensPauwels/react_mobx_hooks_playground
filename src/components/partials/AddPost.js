import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../../hooks';

const AddPost = () => {
  const postStore = useStore('postStore');
  const { newPost } = postStore;

  const onChange = ev => {
    newPost.content = ev.target.value;
  };

  const addPost = () => {
    postStore.addPost();
  };

  return useObserver(() => (
    <>
      <input type="text" onChange={onChange} value={newPost.content}/>
      <button onClick={addPost}>Add Post</button>
    </>
  ))
};

export default AddPost;

