import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';

import { Post } from './';
import { useStore } from '../../hooks';

import styles from '../../assets/scss/post.module.scss';


const Posts = () => {
  const postStore = useStore('postStore');

  useEffect(() => {
    postStore.initialize();
  }, []);

  return useObserver(() => {
    const { posts } = postStore;

    return (
      <div className={styles.posts}>
        {
          posts.map((post, index) => (
            <Post post={post} key={index}/>
          ))
        }
      </div>
    );
  })
};
 
export default Posts;
