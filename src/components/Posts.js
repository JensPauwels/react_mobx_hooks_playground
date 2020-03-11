import React from 'react';
import { observer } from 'mobx-react-lite';
import { getStore } from '../stores';

import styles from '../assets/scss/post.module.scss';

const Comment = ({ comment }) => (
  <li>{ comment }</li>
)

const AddComment = observer(({ post }) => { 
  const onChange = ev => {
    post.newComment = ev.target.value;
  };

  return (
    <>
      <input type="text" onChange={onChange} value={post.newComment}/>
      <button onClick={post.addComment}>Add Comment</button>
    </>
  )
});

const Post = observer(({ post }) => {
  return ( 
    <article className={styles.post}>
      <div className={styles.info}>
        <span>{ post.user }</span>
        <span>...</span>
      </div>
      <figure>
        <img src={require(`../assets/images/${post.image}`)} alt={post.description} />
        <figcaption>
          <div>
            <span>{post.description}</span>
          </div>
          <div>
            <span>Likes { post.likes }</span>
            <button onClick={post.addLike}>Add like</button>
          </div>
        </figcaption>
      </figure>

      <ul>
        {
          post.comments.map((comment, index) => (<Comment comment={comment} key={index}/>))
        }
      </ul>
      <AddComment post={post}/>
    </article>
  )
});
 
const Posts = observer(() => {
  const { posts } = getStore('postStore');

  return posts.map((post, index) => (<Post post={post} key={index}/>));
});

export default Posts;
