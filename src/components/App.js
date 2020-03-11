import React, { useEffect } from 'react';

import { Posts, AddPost } from './';
import { getStore } from '../stores';

const App = () => { 
  const postStore = getStore('postStore');

  useEffect(() => {
    postStore.initialize();

    return () => {
      console.log('component will unmount');
    }
  }, []);

  return (
    <Posts />
  );
};

export default App;

